import { useDarkMode } from '@/hooks/useDarkMode';

import { CardThemed } from '@/presentation/shared/CardThemed';
import { ViewThemed } from '@/presentation/shared/ViewThemed';
import { SwitchThemed } from '@/presentation/shared/SwitchThemed';

const ThemesScreen = () => {
  const { darkModeSettings, setDarkMode, setSystemMode } = useDarkMode();

  const {isDarkMode, systemMode} = darkModeSettings;

  console.log("🚀 ~ realiznado el toogle desde html:", {
  isDarkMode, systemMode
  });

  return (
    <ViewThemed isMargin>
      <CardThemed className='mt-5'>
        <SwitchThemed
          text='Dark Mode'
          className='mb-5'
          value={darkModeSettings.isDarkMode}
          onValueChange={setDarkMode}
        />

        <SwitchThemed
          text='System Mode'
          value={darkModeSettings.systemMode}
          onValueChange={setSystemMode}
        />
      </CardThemed>
    </ViewThemed>
  );
};

export default ThemesScreen;
