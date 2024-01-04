import { jest } from '@jest/globals';

import type { BaseStorage } from '@plasmohq/storage';

import editStylesheet from '~listener/editStylesheet';
import restoreSettings from '~listener/restoreSettings';

jest.mock('./editStylesheet', () => ({
  __esModule: true,
  default: jest.fn((active, css) => {}),
}));

describe('restoreSettings function', () => {
  const mockStyleSettings: StyleSetting[] = [
    {
      name: 'Hide Feed',
      storageId: 'hideFeed',
      css: 'some css {}',
      section: ['General', 'Homepage'],
    },
  ];

  beforeEach(() => {
    (editStylesheet as jest.Mock).mockClear();
  });

  it('call editStylesheet when a setting is active', async () => {
    const mockStorage = {
      get: async (key) => {
        return Promise.resolve(true);
      },
    } as unknown as BaseStorage;

    await restoreSettings(mockStorage, mockStyleSettings);

    expect(editStylesheet).toHaveBeenCalledWith(true, 'some css {}');
  });

  it('does not call editStylesheet when a setting is disabled', async () => {
    const mockStorage = {
      get: async (key) => {
        return Promise.resolve(false);
      },
    } as unknown as BaseStorage;

    await restoreSettings(mockStorage, mockStyleSettings);

    expect(editStylesheet).not.toHaveBeenCalled();
  });

  it('does not call editStylesheet when a setting is null', async () => {
    const mockStorage = {
      get: async (key) => {
        return Promise.resolve(null);
      },
    } as unknown as BaseStorage;

    await restoreSettings(mockStorage, mockStyleSettings);

    expect(editStylesheet).not.toHaveBeenCalled();
  });
});
