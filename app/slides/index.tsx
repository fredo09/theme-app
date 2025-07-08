import { Text, ImageSourcePropType, FlatList, Image, useWindowDimensions } from 'react-native';
import { ViewThemed } from '@/presentation/shared/ViewThemed';
import { TextThemed } from '@/presentation/shared/TextThemed';
import { ButtonThemed } from '@/presentation/shared/ButtonThemed';

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

interface SlideItemProps {
  item: Slide;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../../assets/images/slides/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../../assets/images/slides/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../../assets/images/slides/slide-3.png'),
  },
];

const SlidesScreen = () => {
  return (
    <ViewThemed>
      <FlatList
        data={items}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <SlideItem item={item} />
        )}
        horizontal
        pagingEnabled
      />
      <ButtonThemed className='absolute bottom-10 right-5 w-[150px]'>
        Siguiente
      </ButtonThemed>
      <ButtonThemed className='absolute bottom-10 right-5 w-[150px]'>
        Finalizar
      </ButtonThemed>
    </ViewThemed>
  );
};

const SlideItem = ({ item: { title, img, desc } }: SlideItemProps) => {
  const { width } = useWindowDimensions();

  return (
    <ViewThemed 
      className='flex-1 rounded p-10 justify-center bg-red-500' 
      style={{ width }}>
      <Image
        source={img}
        alt={title}
        style={{
          width: width * 0.7,
          height: width * 0.7,
          resizeMode: 'center',
          alignSelf: 'center',
        }}
      />

      <TextThemed typeText='h1' className='text-light-primary dark:text-dark-primary'>{title}</TextThemed>
      <TextThemed className='mt-10'>{desc}</TextThemed>
    </ViewThemed>
  )
}



export default SlidesScreen;
