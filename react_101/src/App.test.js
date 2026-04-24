import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the product card and fallback greeting', () => {
  render(<App />);
  expect(screen.getByText(/aurora speaker/i)).toBeInTheDocument();
  expect(screen.getByText(/\$129.99/i)).toBeInTheDocument();
  expect(screen.getByText(/hello, there!/i)).toBeInTheDocument();
});
