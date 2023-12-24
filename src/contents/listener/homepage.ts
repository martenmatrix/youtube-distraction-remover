import { Storage } from '@plasmohq/storage';

import { homepage } from '../selectors';
import editStylesheet from './editStylesheet';

function setupHomepageListener(storage: Storage): void {
  storage.watch({
    hideFeed: (active) => editStylesheet(active, homepage.hideFeed),
  });
}

export default setupHomepageListener;
