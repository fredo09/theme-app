import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
// import { StatusBar } from 'expo-status-bar';
import { useThemeColor } from '@/hooks/useThemeColor';
import { allRoutes } from '@/constants/Routes'
// import { ViewThemed } from '@/presentation/shared/ViewThemed';
// import { TextThemed } from '@/presentation/shared/TextThemed';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { ThemedChangerContextProvider } from '@/presentation/context/ThemedChangerContext';
//import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'; se mueve para uso del provider
// import { Stack } from 'expo-router';

// import { useColorScheme } from '@/hooks/useColorScheme'; se mueve al usar el 'ThemedChangerContextProvider'
import * as SplashScreen from 'expo-splash-screen';

//* Global css
import './../global.css';
import 'react-native-reanimated';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  //! Use color theme hook expo
  const backGroundColor = useThemeColor({
    // light: 'red',r
    // dark: 'indigo'
  }, 'background');

  // const colorScheme = useColorScheme(); se elimino al usar el 'ThemedChangerContextProvider'
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
      <ThemedChangerContextProvider>
      {/* <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}> */}
        
        <Stack 
          screenOptions={{
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor: backGroundColor
            },
            headerStyle: {
              backgroundColor: backGroundColor
            }
          }}>

          <Stack.Screen 
            name='index' 
            options={{
              title: ''
            }}/>

            {
              allRoutes.map(({ name, title }) => (
                <Stack.Screen
                  name={name}
                  key={name}
                  options={{
                    title,
                    headerShown: !title.includes('Slides')
                  }}
                />
              ))
            }

        </Stack>
      </ThemedChangerContextProvider>
        {/* <ViewThemed isMargin>
          <TextThemed className='mt-20'>
            Layout Home
          </TextThemed>
        </ViewThemed> */}
        {/* <StatusBar style="auto" /> */}
      {/* </ThemeProvider> */}
    </GestureHandlerRootView>
  );
}
