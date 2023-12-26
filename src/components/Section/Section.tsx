import React from 'react';

import { useStorage } from '@plasmohq/storage/hook';

import { Collapsible, OptionButton } from '../.';

interface StyleSettingState extends StyleSetting {
  state: boolean;
  toggleState: () => any;
}

type GeneralSectionType = {
  name: string;
  settings: StyleSetting[];
};

function Section({ name, settings }: GeneralSectionType) {
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
    <Collapsible name={name}>
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
