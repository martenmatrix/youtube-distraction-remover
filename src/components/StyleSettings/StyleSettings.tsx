import React from 'react';

import { Section } from '~components';

type StyleSettingsType = {
  settings: StyleSetting[];
};

function StyleSettings({ settings }: StyleSettingsType): React.ReactNode {
  const sections: string[] = Array.from(
    new Set(...settings.map((setting) => setting.section)),
  );

  return (
    <>
      {sections.map((section) => {
        return (
          <Section
            key={section}
            name={section}
            settings={settings.filter((setting) =>
              setting.section.includes(section),
            )}
          />
        );
      })}
    </>
  );
}

export default StyleSettings;
