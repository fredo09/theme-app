import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { Stack } from 'expo-router';

import { useColorScheme } from '@/hooks/useColorScheme';
import * as SplashScreen from 'expo-splash-screen';

//* Global css
import './../global.css';
import 'react-native-reanimated';
import { useThemeColor } from '@/hooks/useThemeColor';
import { ViewThemed } from '@/presentation/shared/ViewThemed';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  //! Use color theme hook expo
  const backGroundColor = useThemeColor({
    // light: 'red',
    // dark: 'indigo'
  }, 'background');

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ backgroundColor: backGroundColor, flex: 1 }}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        {/* <Stack>
        </Stack> */}
        <ViewThemed isMargin>
          <Text className='mt-10 text-3xl dark:text-dark-text text-light-text'>Layout</Text>
        </ViewThemed>
        <StatusBar style="auto" />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
