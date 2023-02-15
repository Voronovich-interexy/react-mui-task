import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './ClassComponent';

test('renders learn react link', () => {
  render(<App numbers={[]} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
