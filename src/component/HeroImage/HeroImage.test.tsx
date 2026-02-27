import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { HeroImage } from './HeroImage';

describe('HeroImage', () => {
  it('renders title and subtitle', () => {
    render(
      <HeroImage
        imageUrl="test.jpg"
        title="Hero Title"
        subtitle="Hero Subtitle"
      />
    );

    expect(screen.getByText('Hero Title')).toBeInTheDocument();
    expect(screen.getByText('Hero Subtitle')).toBeInTheDocument();
  });

  it('calls button click handler', () => {
    const handleClick = jest.fn();

    render(
      <HeroImage
        imageUrl="test.jpg"
        buttonText="Click Me"
        onButtonClick={handleClick}
      />
    );

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders with custom height', () => {
    render(<HeroImage imageUrl="test.jpg" height="500px" />);

    const hero = screen.getByTestId('hero-image');
    expect(hero).toHaveStyle({ height: '500px' });
  });
});