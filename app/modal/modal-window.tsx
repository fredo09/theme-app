import React from 'react';
import { Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { ViewThemed } from '@/presentation/shared/ViewThemed';
import { TextThemed } from '@/presentation/shared/TextThemed';
import { ButtonThemed } from '@/presentation/shared/ButtonThemed';
import { router } from 'expo-router';

const ISTHEMEDIOS = Platform.OS === 'ios' ? 'light' : 'dark';

const ModalWindow = () => {
	return (
		<ViewThemed className='flex-1 justify-center items-center' bgColor='#a52182'>
			<TextThemed>Hola, Soy un modal</TextThemed>

			<ButtonThemed className='my-1' onPress={() => router.push('/modal/modal-window-two')}>
				Otro Modal desde un Modal
			</ButtonThemed>

			<ButtonThemed className='my-1' onPress={()=> router.dismiss()}>
				Cerrar
			</ButtonThemed>

			<StatusBar style={ISTHEMEDIOS}/>
		</ViewThemed>
	)
}

export default ModalWindow;