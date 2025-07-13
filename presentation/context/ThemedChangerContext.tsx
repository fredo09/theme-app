import { useContext, createContext, PropsWithChildren } from "react";
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from 'nativewind';

interface ThemedChangerContextType {
	currenTheme: 'light' | 'dark';
	isSystemTheme: boolean;

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
	const { colorScheme } = useColorScheme();

	return(
		<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
			<ThemedChangerContext.Provider
				value={{
					currenTheme: 'light',
					isSystemTheme: false,
					toggleTheme: async () => {},
					setSystemTheme: async () => {}
				}}>
					{children}
			</ThemedChangerContext.Provider>
		</ThemeProvider>
	)
}
