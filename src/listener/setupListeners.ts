import styleSettings from '../styleSettings';
import editStylesheet from './editStylesheet';

function setupListeners(storage: Storage): void {
  styleSettings.forEach((setting) => {
    const callbackMap = {};
    callbackMap[setting.storageId] = (active: boolean) =>
      editStylesheet(active, setting.css);

    storage.watch(callbackMap);
  });
}

export default setupListeners;
