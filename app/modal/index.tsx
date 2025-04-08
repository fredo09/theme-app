import { Text } from 'react-native';
import { Link, router } from 'expo-router';
import { ViewThemed } from '@/presentation/shared/ViewThemed';
import { ButtonThemed } from '@/presentation/shared/ButtonThemed';

const ModalScreen = () => {
  return (
    <ViewThemed>
      <Link asChild href='/modal/modal-window' className='mx-4'>
				<Text className='text-light-text dark:text-dark-text my-2 text-xl'>
					Abrir Modal
				</Text>
			</Link>

			<ButtonThemed className='mx-4' onPress={() => { router.push('/modal/modal-window') }}>
				Abiri Modal Otra vez??
			</ButtonThemed>
    </ViewThemed>
  );
};

export default ModalScreen;
