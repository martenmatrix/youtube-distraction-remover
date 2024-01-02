import React from 'react';

import { Collapsible, OptionButton } from '../.';

type GeneralSectionType = {
  name: string;
  settings: StyleSetting[];
};

function Section({ name, settings }: GeneralSectionType) {
  return (
    <Collapsible name={name}>
      {settings.map((styleSettingState) => (
        <OptionButton
          key={styleSettingState.storageId}
          id={styleSettingState.storageId}
          text={styleSettingState.name}
        />
      ))}
    </Collapsible>
  );
}

export default Section;
