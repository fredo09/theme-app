import { useState } from 'react';
//import { useColorScheme } from 'nativewind';
import { useThemedChangerContext } from '@/presentation/context/ThemedChangerContext';
//import { useColorScheme } from 'react-native';

export const useDarkMode = () => {
	//! provider theme color
	const { toggleTheme, setSystemTheme, currenTheme, isSystemTheme } = useThemedChangerContext(); 

	//* const themeCurrent = useColorScheme(); -> version react-native
	//const { colorScheme, setColorScheme } = useColorScheme();

	const [darkModeSettings, setDarkModeSettings] = useState({
		isDarkMode: currenTheme === 'dark',
		systemMode: isSystemTheme //* -> Usamos para persistir el modo en el dispositivo
	});
	console.log("🚀 ~ useDarkMode ~ darkModeSettings:", darkModeSettings)

	const setDarkMode = (value: boolean) => {
		console.log("🚀 ~ setDarkMode ~ value:", value)
		//setColorScheme(value ? 'dark' : 'light'); // -> seteamos el theme segun el value del switch
		toggleTheme();

		setDarkModeSettings({
			isDarkMode: value,
			systemMode: false
		});
	}

	const setSystemMode = (value: boolean) => {
		if (value) setSystemTheme();

		setDarkModeSettings({
			isDarkMode: darkModeSettings.isDarkMode,
			systemMode: value
		});
	}

	return {
		darkModeSettings,
		setDarkMode,
		setSystemMode
	}
}