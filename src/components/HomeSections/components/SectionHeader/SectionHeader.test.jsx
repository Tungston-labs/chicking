import React from 'react';
import { render, screen } from '@testing-library/react';
import SectionHeader from './SectionHeader.jsx';

describe('SectionHeader component', () => {
  it('renders title, eyebrow, and description when provided', () => {
    render(
      <SectionHeader
        eyebrow="OUR STORY"
        title="Welcome to Chicking"
        description="Serving delicious meals daily."
      />
    );

    expect(screen.getByText('OUR STORY')).toBeInTheDocument();
    expect(screen.getByText('Welcome to Chicking')).toBeInTheDocument();
    expect(screen.getByText('Serving delicious meals daily.')).toBeInTheDocument();
  });
});
