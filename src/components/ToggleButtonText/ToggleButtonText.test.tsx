import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ToggleButtonText from './ToggleButtonText';

test('displays text prop as text', () => {
  render(
    <ToggleButtonText
      text={'This is a test text.'}
      activated={true}
      onChange={() => {}}
    />,
  );
  const paragraph = screen.getByText('This is a test text.');
  expect(paragraph).toBeInTheDocument();
});

test('represents active state passed as props', () => {
  const { rerender } = render(
    <ToggleButtonText text={'test'} activated={true} onChange={() => {}} />,
  );
  const toggleButtonActive = screen.getByRole('checkbox');
  expect(toggleButtonActive).toHaveAttribute('aria-checked', 'true');

  rerender(
    <ToggleButtonText text={'test'} activated={false} onChange={() => {}} />,
  );
  const toggleButtonDisabled = screen.getByRole('checkbox');
  expect(toggleButtonDisabled).toHaveAttribute('aria-checked', 'false');
});

test('calls onChange when element is clicked', async () => {
  const mockFn = jest.fn();
  render(<ToggleButtonText text={'test'} activated={true} onChange={mockFn} />);
  const user = userEvent.setup();

  const toggleButtonDisabled = screen.getByRole('checkbox');
  await user.click(toggleButtonDisabled);

  expect(mockFn).toHaveBeenCalled();
});
