import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const useAnimations = () => {
    // * Crea una referencia mutable para manejar la opacidad animada. 'Animated.Value(0)' inicializa la opacidad en 0, y 'useRef' asegura que este valor persista entre renders.
    const animatedOpacity = useRef(new Animated.Value(0)).current;
	const animatedTop = useRef(new Animated.Value(0)).current;

	const fadeIn = ({ 
			toValue = 1, 
			duration = 400, 
			useNativeDriver = true, 
			easing = Easing.linear,
			callback = () => {}
		}) => {
      Animated.timing(animatedOpacity, {
				toValue: toValue,
				duration: duration,
				easing: easing,
				useNativeDriver: useNativeDriver
      }).start(callback);
    };
    
    const fadeOut = ({ 
			toValue = 0, 
			duration = 400, 
			useNativeDriver = true, 
			easing = Easing.linear,
			callback = () => {}
		}) => {
      Animated.timing(animatedOpacity, {
				toValue: toValue,
				duration: duration,
				useNativeDriver: useNativeDriver
      }).start(callback);
			//* .start(() => animatedTop.setValue(-100)); Resetea el valor de 'animatedTop' a -100 cuando la animación de opacidad se completa. Forma 1
    }

		const startMovingTopPosition = ({
			initialPosition = -100,
			toValue = 0, 
			duration = 400, 
			useNativeDriver = true, 
			easing = Easing.ease,
			callback = () => {}
		}) => {
			animatedTop.setValue(initialPosition);
			Animated.timing(animatedTop, {
				toValue: toValue,
				duration: duration,
				// easing: Easing.bounce, tipo de animacion
				easing: easing,
				useNativeDriver: useNativeDriver
			}).start(callback);
		}

	return {
		animatedOpacity,
		animatedTop,
		startMovingTopPosition,
		fadeIn,
		fadeOut
	}
}