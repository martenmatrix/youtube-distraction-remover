import React from 'react';

import { useStorage } from '@plasmohq/storage/hook';

import { Collapsible, OptionButton } from '../.';

type StyleSetting = {
  storageId: string; // The id, which is used to access the specific setting in the Storage API.
  name: string; // A name for the setting, which will be displayed.
};

interface StyleSettingState extends StyleSetting {
  state: boolean;
  toggleState: () => any;
}

type GeneralSectionType = {
  settings: StyleSetting[];
};

function Section({ settings }: GeneralSectionType) {
  const styleSettingStates: StyleSettingState[] = [];

  settings.forEach((setting) => {
    const [storage, setStorage] = useStorage<boolean>(setting.storageId, false);
    const toggleState = () => setStorage((prevState) => !prevState);

    styleSettingStates.push({
      state: storage,
      toggleState,
      ...setting,
    });
  });

  return (
    <Collapsible name="General">
      {styleSettingStates.map((styleSettingState) => (
        <OptionButton
          key={styleSettingState.storageId}
          text={styleSettingState.name}
          active={styleSettingState.state}
          onClick={styleSettingState.toggleState}
        />
      ))}
    </Collapsible>
  );
}

export default Section;
