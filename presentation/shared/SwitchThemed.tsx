import React from 'react';
import { Platform, Pressable, Switch, View } from 'react-native';
import { TextThemed } from './TextThemed';
import { useThemeColor } from '@/hooks/useThemeColor';

interface Props {
	text?: string;
	value: boolean;
	className?: string;
	onValueChange: (value: boolean) => void;
}

//! Verifica que si es android o Ios
const isAndroid = Platform.OS === 'android';

export const SwitchThemed = ({ text, value, className, onValueChange }: Props) => {
	const switchActiveColor = useThemeColor({}, 'primary');

	return (
		<Pressable
			className={`flex flex-row mx-2 items-center justify-between active:opacity-80 ${className}`}
			onPress={() => onValueChange(!value)}>
			{
				text ? (
					<TextThemed typeText='h2'> {text} </TextThemed>
				):(
					<View />
				)
			}
			<Switch
				value={value}
				onValueChange={onValueChange}
				// ios_backgroundColor={value ? 'green' : 'red'}
				thumbColor={isAndroid ? switchActiveColor : ''}
				trackColor={{
					false: 'gray',
					true: isAndroid ? switchActiveColor : ''
				}}
			/>
		</Pressable>
	)
}
