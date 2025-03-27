import React from 'react';
import { View, ViewProps } from 'react-native';


interface Props extends ViewProps {
	className?: string;
}

export const CardThemed = ({ className, children, ...restProps }: Props) => {
	return (
		<View
			{...restProps}
			className={`bg-white dark:bg-black/10 rounded-xl p-2 shadow shadow-black/5 ${className}`}>
			{ children }
		</View>
	)
}
