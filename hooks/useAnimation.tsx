import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const useAnimations = () => {
    // * Crea una referencia mutable para manejar la opacidad animada. 'Animated.Value(0)' inicializa la opacidad en 0, y 'useRef' asegura que este valor persista entre renders.
    const animatedOpacity = useRef(new Animated.Value(0)).current;
	const animatedTop = useRef(new Animated.Value(-100)).current;

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
      }).start(() => animatedTop.resetAnimation());
			//* .start(() => animatedTop.setValue(-100)); Resetea el valor de 'animatedTop' a -100 cuando la animación de opacidad se completa. Forma 1
    }

		const startMovingTopPosition = () => {
			Animated.timing(animatedTop, {
				toValue: 0,
				duration: 700,
				// easing: Easing.bounce, tipo de animacion
				easing: Easing.linear,
				useNativeDriver: true
			}).start();
		}

	return {
		animatedOpacity,
		animatedTop,
		startMovingTopPosition,
		fadeIn,
		fadeOut
	}
}