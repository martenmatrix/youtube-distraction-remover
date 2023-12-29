import { render, screen, within } from '../../../test-utils';
import StyleSettings from './StyleSettings';

const mockSetStorage = jest.fn();

jest.mock('@plasmohq/storage/hook', () => ({
  useStorage: jest
    .fn()
    .mockReturnValue([false, (...args) => mockSetStorage(...args)]),
}));

describe('StyleSettings component', () => {
  it('displays stylesettings in correct sections', () => {
    const mockStyleSettings = [
      {
        name: 'Hide Feed',
        storageId: 'hideFeed',
        css: '.ytd-two-column-browse-results-renderer[is-default-grid] { visibility: hidden; width: 0px; height: 0px; }',
        section: ['General', 'Homepage'],
      },
      {
        name: 'Hide Something',
        storageId: 'hideSomething',
        css: '.ytd-two-column-browse-results-renderer[is-default-grid] { visibility: hidden; width: 0px; height: 0px; }',
        section: ['Homepage'],
      },
    ];

    const result = render(<StyleSettings settings={mockStyleSettings} />);

    // check, if hideFeed is displayed under general section and hideSomething is not
    const homepageCollapsible = result.container.querySelector(
      'div[id="General"]',
    ) as HTMLElement;
    expect(homepageCollapsible).toBeInTheDocument();
    const hideFeedSetting = within(homepageCollapsible).getByText('Hide Feed');
    const hideSomethingSetting =
      within(homepageCollapsible).queryByText('Hide Something');
    expect(hideSomethingSetting).not.toBeInTheDocument();
  });
});
