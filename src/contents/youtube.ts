import type { PlasmoCSConfig } from 'plasmo';

import { Storage } from '@plasmohq/storage';

import { restoreSettings, setupListeners } from '~listener';
import styleSettings from '~styleSettings';

export const config: PlasmoCSConfig = {
  matches: ['*://www.youtube.com/*'],
  run_at: 'document_start',
  // Executing in MAIN world, will disable Chrome Extensions API => Storage API disabled
};

console.warn('YouTube Distraction Remover: Listeners were setup');
const storage: Storage = new Storage();
restoreSettings(storage, styleSettings).catch((e) => console.error(e));
setupListeners(storage, styleSettings);
