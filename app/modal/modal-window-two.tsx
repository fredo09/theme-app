import React from 'react'
import { View, Text, Platform } from 'react-native'
import { StatusBar } from 'expo-status-bar';

import { ViewThemed } from '@/presentation/shared/ViewThemed';
import { TextThemed } from '@/presentation/shared/TextThemed';
import { ButtonThemed } from '@/presentation/shared/ButtonThemed';
import { router } from 'expo-router';

const ISTHEMEDIOS = Platform.OS === 'ios' ? 'light' : 'dark';

const ModalWindowTwo = () => {
	return (
		<ViewThemed className='flex-1 justify-center items-center' bgColor='green'>
			<TextThemed>Hola, Soy un modal 2</TextThemed>

			<ButtonThemed className='my-2' onPress={() => router.dismiss()}>
				Cerrar
			</ButtonThemed>
	
			<StatusBar style={ISTHEMEDIOS}/>
		</ViewThemed>
	)
}

export default ModalWindowTwo;