import { useState } from 'react';
import { useColorScheme } from 'nativewind';
//import { useColorScheme } from 'react-native';

import { CardThemed } from '@/presentation/shared/CardThemed';
import { SwitchThemed } from '@/presentation/shared/SwitchThemed';
import { ViewThemed } from '@/presentation/shared/ViewThemed';

const ThemesScreen = () => {
  //const themeCurrent = useColorScheme(); -> version react-native
  const { colorScheme, setColorScheme } = useColorScheme();  
  

  const [darkModeSettings, setDarkModeSettings] = useState({
    isDarkMode: colorScheme === 'dark',
    systemMode: false //* -> Usamos para persistir el modo en el dispositivo
  });

  const setDarkMode = (value: boolean) => {
    setColorScheme(value ? 'dark' : 'light'); // -> seteamos el theme segun el value del switch

    setDarkModeSettings({
      isDarkMode: value,
      systemMode: false
    });
  }

  const setSystemMode = (value: boolean) => {
    setDarkModeSettings({
      isDarkMode: darkModeSettings.isDarkMode,
      systemMode: value
    });
  }

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
