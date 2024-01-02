import { jest } from '@jest/globals';
import userEvent from '@testing-library/user-event';

import { useStorage } from '@plasmohq/storage/hook';

import { render, screen } from '../../../test-utils';
import OptionButton from './OptionButton';

jest.mock('@plasmohq/storage/hook', () => ({
  useStorage: jest.fn(),
}));

describe('OptionButton component', () => {
  beforeAll(() => {
    (useStorage as jest.Mock).mockImplementation(() => [
      true,
      jest.fn().mockImplementation((key, defaultValue) => true),
    ]);
  });

  test('renders with correct text', () => {
    render(<OptionButton text="Option 1" id="opt1" />);
    const option = screen.getByText('Option 1');
    expect(option).toBeInTheDocument();
  });

  test('displays states correct', () => {
    (useStorage as jest.Mock).mockImplementation(() => [
      true,
      jest.fn().mockImplementation((key, defaultValue) => true),
    ]);

    const { rerender } = render(<OptionButton text="Option 1" id="opt1" />);
    const active = screen.getByText(/active/i);
    expect(active).toBeInTheDocument();

    (useStorage as jest.Mock).mockImplementation(() => [
      false,
      jest.fn().mockImplementation((key, defaultValue) => true),
    ]);
    rerender(<OptionButton text="Option 1" id="opt1" />);
    const disabled = screen.getByText(/disabled/i);
    expect(disabled).toBeInTheDocument();
  });
});
