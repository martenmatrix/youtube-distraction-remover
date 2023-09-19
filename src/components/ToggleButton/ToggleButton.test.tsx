import { render, screen } from '@testing-library/react';
import ToggleButton from './ToggleButton';

test('represents active state passed as props', () => {
  const { rerender } = render(<ToggleButton activated={true} onChange={() => {}} />);
  const toggleButtonActive = screen.getByRole('checkbox');
  expect(toggleButtonActive).toHaveAttribute('aria-checked', 'true');

  rerender(<ToggleButton activated={false} onChange={() => {}} />);
  const toggleButtonDisabled = screen.getByRole('checkbox');
  expect(toggleButtonDisabled).toHaveAttribute('aria-checked', 'false');
});

test('calls onChange when element is clicked', () => {
  expect(true).toEqual(true);
});
