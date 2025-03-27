import React from 'react';
import { TextInputProps, TextInput } from 'react-native';

interface Props extends TextInputProps {
	className?: string;
}

export const TextInputThemed = ({ className, ...restProps }: Props) => {
	return (
		<TextInput
			className='py-4 px-2 text-black dark:text-white'
			placeholderTextColor='gray'
			{...restProps}
		/>
	)
}
