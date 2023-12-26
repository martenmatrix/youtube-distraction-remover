declare type StyleSetting = {
  name: string; // A name for the setting, which will be displayed.
  storageId: string; // The id, which is used to access the specific setting in the Storage API.
  css: string; // The CSS, which should be applied to the document, when the setting is active.
  section?: string[] | string; // The sections, where the setting should be listed.
};
