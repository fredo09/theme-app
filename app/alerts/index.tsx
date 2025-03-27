import { Alert } from 'react-native';
import { ButtonThemed } from '@/presentation/shared/ButtonThemed';
import { ViewThemed } from '@/presentation/shared/ViewThemed';

const AlertsScreen = () => {
	const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

		const createThreeButtonAlert = () =>
			Alert.alert('Quieres esto??', 'Recuerda que si quieres esto???', [
				{
					text: 'Ask me later',
					onPress: () => console.log('Ask me later pressed'),
				},
				{
					text: 'Cancel',
					onPress: () => console.log('Cancel Pressed'),
					style: 'destructive',
				},
				{text: 'OK', onPress: () => console.log('OK Pressed')},
			]);

  return (
    <ViewThemed isMargin className='justify-center items-center'>
      <ButtonThemed
				onPress={createTwoButtonAlert}
				className='mb-5 p-2'>
				Alert 1
			</ButtonThemed>
			<ButtonThemed
				onPress={createThreeButtonAlert}
				className='mb-5 p-2'>
					Alert 2
			</ButtonThemed>
    </ViewThemed>
  );
};
export default AlertsScreen;
