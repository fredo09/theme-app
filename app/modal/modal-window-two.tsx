import React from 'react';
import { router } from 'expo-router';
import { Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { ViewThemed } from '@/presentation/shared/ViewThemed';
import { TextThemed } from '@/presentation/shared/TextThemed';
import { ButtonThemed } from '@/presentation/shared/ButtonThemed';

const IS_THEMED_IOS = Platform.OS === 'ios' ? 'light' : 'dark';

const ModalWindowTwo = () => {
	return (
		<ViewThemed className='flex-1 justify-center items-center' bgColor='green'>
			<TextThemed>Hola, Soy un modal 2</TextThemed>

			<ButtonThemed className='my-2' onPress={() => router.dismiss()}>
				Cerrar
			</ButtonThemed>
	
			<StatusBar style={IS_THEMED_IOS}/>
		</ViewThemed>
	)
};

export default ModalWindowTwo;