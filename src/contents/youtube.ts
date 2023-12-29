import type { PlasmoCSConfig } from 'plasmo';

import { Storage } from '@plasmohq/storage';

import setupListeners from '~listener';

export const config: PlasmoCSConfig = {
  matches: ['*://www.youtube.com/*'],
  run_at: 'document_start',
  world: 'MAIN',
};

console.warn('YouTube Distraction Remover: Listeners were setup');
const storage: Storage = new Storage();
setupListeners(storage);
