import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import ProtectedRoute from './ProtectedRoute.jsx';
import authReducer from '../store/auth/authSlice.js';

const createMockStore = (authOverrides = {}) => {
  return configureStore({
    reducer: {
      auth: (state = {
        accessToken: '',
        admin: null,
        authBootstrapStatus: 'succeeded',
        forgotPasswordEmail: '',
        forgotPasswordError: '',
        forgotPasswordStatus: 'idle',
        isAuthenticated: false,
        loginError: '',
        loginStatus: 'idle',
        resetPasswordError: '',
        resetPasswordStatus: 'idle',
        resetToken: '',
        verifyOtpError: '',
        verifyOtpStatus: 'idle',
        ...authOverrides,
      }) => state,
    },
  });
};

describe('ProtectedRoute component', () => {
  const futureFlags = { v7_startTransition: true, v7_relativeSplatPath: true };

  it('renders null when authBootstrapStatus is loading', () => {
    const store = createMockStore({ authBootstrapStatus: 'loading' });
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter future={futureFlags}>
          <ProtectedRoute>
            <div>Protected Content</div>
          </ProtectedRoute>
        </MemoryRouter>
      </Provider>
    );

    expect(container.firstChild).toBeNull();
  });

  it('redirects to /admin-login when user is not authenticated', () => {
    const store = createMockStore({ isAuthenticated: false, authBootstrapStatus: 'succeeded' });
    render(
      <Provider store={store}>
        <MemoryRouter future={futureFlags} initialEntries={['/admin-dashboard']}>
          <Routes>
            <Route
              path="/admin-dashboard"
              element={
                <ProtectedRoute>
                  <div>Protected Content</div>
                </ProtectedRoute>
              }
            />
            <Route path="/admin-login" element={<div>Login Page</div>} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('Login Page')).toBeInTheDocument();
    expect(screen.queryByText('Protected Content')).not.toBeInTheDocument();
  });

  it('renders children when user is authenticated', () => {
    const store = createMockStore({ accessToken: 'test-access-token', authBootstrapStatus: 'succeeded' });
    render(
      <Provider store={store}>
        <MemoryRouter future={futureFlags} initialEntries={['/admin-dashboard']}>
          <Routes>
            <Route
              path="/admin-dashboard"
              element={
                <ProtectedRoute>
                  <div>Protected Content</div>
                </ProtectedRoute>
              }
            />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('Protected Content')).toBeInTheDocument();
  });
});
