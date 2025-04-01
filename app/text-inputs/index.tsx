import { useState } from 'react';
import { ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import { TextThemed } from '@/presentation/shared/TextThemed';
import { CardThemed } from '@/presentation/shared/CardThemed';
import { ViewThemed } from '@/presentation/shared/ViewThemed';
import { TextInputThemed } from '@/presentation/shared/TextInputThemed';

const isIos = Platform.OS === 'ios';

const TextInputsScreen = () => {
	const [valuePerson, setValuePerson] = useState({
		name: '',
		email: '',
		phone: ''
	});

  return (
    <KeyboardAvoidingView behavior={isIos ? 'height' : undefined}>
			<ScrollView>
				<ViewThemed isMargin>
					<CardThemed className='mb-5'>
						<TextInputThemed
							placeholder='Name'
							autoCapitalize={'words'}
							autoCorrect={false}
							keyboardType='default'
							onChangeText={(text) => setValuePerson({...valuePerson, name: text})}
						/>

						<TextInputThemed
							placeholder='Email'
							autoCorrect={false}
							keyboardType='email-address'
							onChangeText={(text) => setValuePerson({...valuePerson, email: text})}
						/>

						<TextInputThemed
							placeholder='Phone'
							autoCorrect={false}
							keyboardType='phone-pad'
							onChangeText={(text) => setValuePerson({...valuePerson, phone: text})}
						/>
					</CardThemed>

					<CardThemed className='my-5'>
						<TextThemed>{JSON.stringify(valuePerson, null, 2)}</TextThemed>
					</CardThemed>
					<CardThemed className='my-5'>
						<TextThemed>{JSON.stringify(valuePerson, null, 2)}</TextThemed>
					</CardThemed>
					<CardThemed className='my-5'>
						<TextThemed>{JSON.stringify(valuePerson, null, 2)}</TextThemed>
					</CardThemed>
					<CardThemed className='my-5'>
						<TextThemed>{JSON.stringify(valuePerson, null, 2)}</TextThemed>
					</CardThemed>
					<CardThemed className='my-5'>
						<TextThemed>{JSON.stringify(valuePerson, null, 2)}</TextThemed>
					</CardThemed>
					<CardThemed className='my-5'>
						<TextThemed>{JSON.stringify(valuePerson, null, 2)}</TextThemed>
					</CardThemed>

					<CardThemed style={{ marginBottom: isIos ? 100 : 10 }}>
						<TextInputThemed
							placeholder='Others'
							autoCorrect={false}
							keyboardType='default'
							onChangeText={(text) => setValuePerson({...valuePerson, phone: text})}
						/>
					</CardThemed>
				</ViewThemed>
			</ScrollView>
		</KeyboardAvoidingView>
  );
};

export default TextInputsScreen;
