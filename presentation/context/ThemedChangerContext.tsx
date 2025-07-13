import { useContext, createContext, PropsWithChildren, useState, useEffect } from "react";
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useColorScheme } from 'nativewind';
import { Colors } from "@/constants/Colors";

interface ThemedChangerContextType {
	currenTheme: 'dark' | 'light';
	isSystemTheme: boolean;
	bgColor: string;

	toggleTheme: () => void;
	setSystemTheme: () => void;
}

const ThemedChangerContext = createContext({} as ThemedChangerContextType);

//* Custom hook para acceder al themedChangerContext
export const useThemedChangerContext = () => {
	const themeChanger = useContext(ThemedChangerContext);
	return themeChanger;
}

// * Provider para guardar las configuraciones del themed de la app
export const ThemedChangerContextProvider = ({children}: PropsWithChildren) => {
	//! hook para verificar el corlo de 'ligth' | 'dark'
	const { colorScheme, setColorScheme } = useColorScheme();

	const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');
	const [isSystemThemeEnabled, setIsSystemThemeEnabled] = useState(true);

	const currenTheme = (isSystemThemeEnabled) ? colorScheme : (isDarkMode) ? 'dark' : 'light'; 

	const bgColor = isDarkMode
		? Colors.dark.background
		: Colors.light.background;

	useEffect(() => {
		AsyncStorage.getItem('theme-color').then((theme) => {
			if(!theme) return;

			setIsDarkMode(theme === 'dark');
			setIsSystemThemeEnabled(theme === 'system');
			setColorScheme(theme as 'light' | 'dark' | 'system');
		});

	}, [])
	


	return(
		<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
			<ThemedChangerContext.Provider
				value={{
					currenTheme: currenTheme ?? 'light',
					isSystemTheme: isSystemThemeEnabled,
					bgColor: bgColor,
					toggleTheme: async () => {
						console.log("🚀 ~ hemos realizado el toogle sistem:", { isDarkMode, isSystemThemeEnabled, colorScheme });
						setIsDarkMode(!isDarkMode)
						setColorScheme(isDarkMode ? 'dark' : 'light')
						setIsSystemThemeEnabled(false);

						await AsyncStorage.setItem('theme-color', isDarkMode ? 'dark' : 'light');
					},
					setSystemTheme: async () => {
						console.log("🚀 ~ hemos realizado el toogle sistem:", { isDarkMode, isSystemThemeEnabled});
						setIsSystemThemeEnabled(true);
						setColorScheme('system')
						await AsyncStorage.setItem('theme-color', 'system');
					}
				}}>
					{children}
			</ThemedChangerContext.Provider>
		</ThemeProvider>
	)
}
