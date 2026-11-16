import { render, screen } from '@testing-library/react';
import App from './App';

beforeAll(() => {
  window.IntersectionObserver = class { observe() {} disconnect() {} unobserve() {} };
  window.matchMedia = () => ({ matches: false, addListener() {}, removeListener() {} });
});

test('renders the portfolio with projects', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /i automate the busywork/i })).toBeInTheDocument();
  expect(screen.getByText('NexStay PMS')).toBeInTheDocument();
});
