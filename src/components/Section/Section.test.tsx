import userEvent from '@testing-library/user-event';
import React from 'react';

import { useStorage } from '@plasmohq/storage/hook';

import { render, screen } from '../../../test-utils';

import '@testing-library/jest-dom';

import Section from './Section';

const mockSetStorage = jest.fn();

const mockUseStorage = jest.fn().mockImplementation((key, defaultValue) => {
  return [defaultValue, (...args) => mockSetStorage(...args)];
});
jest.mock('@plasmohq/storage/hook', () => ({
  useStorage: jest
    .fn()
    .mockReturnValue([false, (...args) => mockSetStorage(...args)]),
}));

describe('GeneralSection', () => {
  beforeEach(() => {
    mockSetStorage.mockReset();
    mockUseStorage.mockReset();
  });

  test('should render options based on provided settings', () => {
    const settings = [
      { storageId: 'setting1', name: 'Setting 1', css: '.class {}' },
      { storageId: 'setting2', name: 'Setting 2', css: '.class {}' },
    ];

    render(<Section name="named section" settings={settings} />);

    expect(screen.getByText('Setting 1')).toBeInTheDocument();
    expect(screen.getByText('Setting 2')).toBeInTheDocument();
    expect(screen.getByText('named section')).toBeInTheDocument();
  });

  test('should toggle the state of a setting when clicked', async () => {
    const settings = [
      { storageId: 'setting1', name: 'Setting 1', css: '.class {}' },
    ];
    const user = userEvent.setup();

    render(<Section name="example" settings={settings} />);

    const button = screen.getByText('Setting 1');
    await user.click(button);

    expect(mockSetStorage).toHaveBeenCalled();
  });
});
