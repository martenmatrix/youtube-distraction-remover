import React, { useState } from 'react';

import { useStorage } from '@plasmohq/storage/hook';

import { Collapsible, OptionButton } from '../.';

interface StyleSettingState extends StyleSetting {
  state: boolean;
  toggleState: () => {};
}

type GeneralSectionType = {
  name: string;
  settings: StyleSetting[];
};

function Section({ name, settings }: GeneralSectionType) {
  function getStyleSettingWithState(): StyleSettingState[] {
    return settings.map((setting) => {
      const [storage, setStorage] = useStorage<boolean>(setting.storageId);
      const toggleState = () => setStorage((prevState) => !prevState);

      return {
        state: storage,
        toggleState: toggleState,
        ...setting,
      };
    });
  }

  const [styleSettingStates] = useState<StyleSettingState[]>([
    ...getStyleSettingWithState(),
  ]);

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
