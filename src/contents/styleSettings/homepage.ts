const homepageStyleSetting: StyleSetting[] = [
  {
    name: 'Hide Feed',
    storageId: 'hideFeed',
    css: '.ytd-two-column-browse-results-renderer[is-default-grid] { visibility: hidden; width: 0px; height: 0px; }',
    section: ['General', 'Homepage'],
  },
];

export default homepageStyleSetting;
