import React from 'react';
import { render, screen } from '@testing-library/react';
import ReasonCard from './ReasonCard.jsx';

describe('ReasonCard component', () => {
  it('renders title, text, and image', () => {
    render(<ReasonCard title="Fresh Ingredients" text="Only the best quality" image="/test.jpg" />);

    expect(screen.getByText('Fresh Ingredients')).toBeInTheDocument();
    expect(screen.getByText('Only the best quality')).toBeInTheDocument();
    expect(screen.getByAltText('Fresh Ingredients')).toHaveAttribute('src', '/test.jpg');
  });
});
