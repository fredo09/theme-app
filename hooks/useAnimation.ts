import { useRef } from "react";
import { Animated } from "react-native";

export const useAnimations = () => {
    // * Crea una referencia mutable para manejar la opacidad animada. 'Animated.Value(0)' inicializa la opacidad en 0, y 'useRef' asegura que este valor persista entre renders.
    const animatedOpacity = useRef(new Animated.Value(0)).current;

	const fadeIn = () => {
        Animated.timing(animatedOpacity, {
			toValue: 1,
			duration: 400,
			useNativeDriver: true
        }).start();
    };
    
    const fadeOut = () => {
        Animated.timing(animatedOpacity, {
			toValue: 0,
			duration: 400,
			useNativeDriver: true
        }).start();
    }

	return {
		animatedOpacity,
		fadeIn,
		fadeOut
	}
}