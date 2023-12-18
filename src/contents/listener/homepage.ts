import { Storage } from '@plasmohq/storage';

import { homepage } from '../selectors';
import editStylesheet from './editStylesheet';

function setupHomepageListener(): void {
  const storage = new Storage();

  storage.watch({
    hideFeed: (active) => editStylesheet(active, homepage.hideFeed),
  });
}

export default setupHomepageListener;
