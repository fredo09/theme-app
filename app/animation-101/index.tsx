import { ButtonThemed } from '@/presentation/shared/ButtonThemed';
import { ViewThemed } from '@/presentation/shared/ViewThemed';

const Animation101Screen = () => {
  return (
    <ViewThemed isMargin>
      <ButtonThemed className='mb-5' onPress={() => console.log('FadeIn')} >
        FadeIn
      </ButtonThemed>

      <ButtonThemed className='mb-5' onPress={() => console.log('FadeOut')}>
        FadeOut
      </ButtonThemed>
    </ViewThemed>
  );
};
export default Animation101Screen;
