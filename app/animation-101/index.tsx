import { Animated, Easing } from 'react-native';
import { useAnimations } from '@/hooks/useAnimation';
import { ViewThemed } from '@/presentation/shared/ViewThemed';
import { ButtonThemed } from '@/presentation/shared/ButtonThemed';

const Animation101Screen = () => {
	const { animatedOpacity, startMovingTopPosition, animatedTop, fadeIn, fadeOut } = useAnimations();

  return (
    <ViewThemed isMargin className='justify-center items-center flex-1'>
      <Animated.View
        className='bg-light-background dark:bg-dark-secondary rounded-xl mb-10'
        style={{
          width: 150,
          height:150,
          opacity: animatedOpacity,
					transform: [
						{ translateY: animatedTop },
					]
        }}
      />

      <ButtonThemed className='mb-5' onPress={() => {
				fadeIn({});
				startMovingTopPosition({
					easing: Easing.bounce,
				});
			}}>
        FadeIn
      </ButtonThemed>

      <ButtonThemed className='mb-5' onPress={() => fadeOut({})}>
        FadeOut
      </ButtonThemed>
    </ViewThemed>
  );
};
export default Animation101Screen;
