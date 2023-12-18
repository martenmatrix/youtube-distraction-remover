import userEvent from '@testing-library/user-event';

import { render, screen } from '../../../test-utils';
import OptionButton from './OptionButton';

test('renders with correct text', () => {
  render(<OptionButton text="Option 1" active={false} />);
  const option = screen.getByText('Option 1');
  expect(option).toBeInTheDocument();
});

test('displays states correct', () => {
  const { rerender } = render(<OptionButton text="Option 1" active={true} />);
  const active = screen.getByText(/active/i);
  expect(active).toBeInTheDocument();

  rerender(<OptionButton text="Option 1" active={false} />);
  const disabled = screen.getByText(/disabled/i);
  expect(disabled).toBeInTheDocument();
});

test('onClick is called, when clicking the element', async () => {
  const mockFunc = jest.fn();
  render(<OptionButton text="Option 1" active={false} onClick={mockFunc} />);

  const option = screen.getByRole('switch');
  const user = userEvent.setup();
  await user.click(option);

  expect(mockFunc).toHaveBeenCalledTimes(1);
});
