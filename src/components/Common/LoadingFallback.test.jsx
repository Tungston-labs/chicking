import React from 'react';
import { render } from '@testing-library/react';
import LoadingFallback from './LoadingFallback.jsx';

describe('LoadingFallback component', () => {
  it('renders loading fallback container cleanly', () => {
    const { container } = render(<LoadingFallback />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
