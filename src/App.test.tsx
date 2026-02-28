import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders component library demo', () => {
  render(<App />);
  expect(screen.getAllByText(/Buttons/i)[0]).toBeInTheDocument();
});