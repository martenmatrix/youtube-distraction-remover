import type { BaseStorage } from '@plasmohq/storage';

import editStylesheet from '~listener/editStylesheet';

async function restoreSettings(
  storage: BaseStorage,
  styleSettings: StyleSetting[],
): Promise<void> {
  for (const setting of styleSettings) {
    const savedState = await storage.get<boolean>(setting.storageId);

    // check, if setting was previously active
    // if disabled or not set, nothing needs to be done, as the css is currently not applied
    if (savedState) {
      editStylesheet(savedState, setting.css);
    }
  }
}

export default restoreSettings;
