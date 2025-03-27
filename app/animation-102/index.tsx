import { useRef } from 'react';
import {Animated, PanResponder, StyleSheet } from 'react-native';
import { ViewThemed } from '@/presentation/shared/ViewThemed';

const Animation102Screen = () => {
	const pan = useRef(new Animated.ValueXY()).current;

	const panResponse = PanResponder.create({
		onStartShouldSetPanResponder: () => true,
		onPanResponderMove: Animated.event([
			null,
			{dx: pan.x, dy: pan.y},
			],
			{
				useNativeDriver: false,
			}
	),
		onPanResponderRelease: () => {
			Animated.spring(pan, { toValue: {x: 0, y:0}, useNativeDriver:false }).start();
		}
	});

	// className='bg-light-background dark:bg-dark-secondary rounded-xl mb-10'
  return (
    <ViewThemed isMargin className='justify-center items-center flex-1'>
      <Animated.View
				{...panResponse.panHandlers}
				style={[pan.getLayout(), styles.box]}
      />
    </ViewThemed>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#61dafb',
    width: 80,
    height: 80,
    borderRadius: 4,
  },
});


export default Animation102Screen;
