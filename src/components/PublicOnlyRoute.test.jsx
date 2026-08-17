import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import PublicOnlyRoute from './PublicOnlyRoute.jsx';

const createMockStore = (authOverrides = {}) => {
  return configureStore({
    reducer: {
      auth: (state = {
        accessToken: '',
        admin: null,
        authBootstrapStatus: 'succeeded',
        isAuthenticated: false,
        ...authOverrides,
      }) => state,
    },
  });
};

describe('PublicOnlyRoute component', () => {
  const futureFlags = { v7_startTransition: true, v7_relativeSplatPath: true };

  it('renders null when authBootstrapStatus is loading', () => {
    const store = createMockStore({ authBootstrapStatus: 'loading' });
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter future={futureFlags}>
          <PublicOnlyRoute>
            <div>Public Content</div>
          </PublicOnlyRoute>
        </MemoryRouter>
      </Provider>
    );

    expect(container.firstChild).toBeNull();
  });

  it('redirects to /dashboard/blogs when user is authenticated', () => {
    const store = createMockStore({ accessToken: 'test-token', authBootstrapStatus: 'succeeded' });
    render(
      <Provider store={store}>
        <MemoryRouter future={futureFlags} initialEntries={['/login']}>
          <Routes>
            <Route
              path="/login"
              element={
                <PublicOnlyRoute>
                  <div>Public Login Page</div>
                </PublicOnlyRoute>
              }
            />
            <Route path="/dashboard/blogs" element={<div>Dashboard Blogs</div>} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('Dashboard Blogs')).toBeInTheDocument();
    expect(screen.queryByText('Public Login Page')).not.toBeInTheDocument();
  });

  it('renders children when user is not authenticated', () => {
    const store = createMockStore({ isAuthenticated: false, authBootstrapStatus: 'succeeded' });
    render(
      <Provider store={store}>
        <MemoryRouter future={futureFlags} initialEntries={['/login']}>
          <Routes>
            <Route
              path="/login"
              element={
                <PublicOnlyRoute>
                  <div>Public Login Page</div>
                </PublicOnlyRoute>
              }
            />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('Public Login Page')).toBeInTheDocument();
  });
});
