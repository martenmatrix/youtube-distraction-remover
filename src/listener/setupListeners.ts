import type { BaseStorage } from '@plasmohq/storage';

import styleSettings from '../styleSettings';
import editStylesheet from './editStylesheet';

function setupListeners(storage: BaseStorage): void {
  styleSettings.forEach((setting) => {
    const callbackMap = {};
    callbackMap[setting.storageId] = (c) =>
      editStylesheet(c.newValue, setting.css);
    storage.watch(callbackMap);
  });
}

export default setupListeners;
