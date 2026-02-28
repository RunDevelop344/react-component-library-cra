import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button', () => {
  it('renders the button with label', () => {
    render(<Button label="Click Me" />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('applies disabled styles when disabled', () => {
    render(<Button label="Disabled" disabled />);
    const button = screen.getByRole('button');

    expect(button).toHaveStyle('background-color: #ccc');
    expect(button).toHaveStyle('cursor: not-allowed');
  });
});