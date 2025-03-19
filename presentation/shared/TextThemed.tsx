
import React from 'react';
import { Text, TextProps } from 'react-native';

type TypeText = 'h1' | 'h2' | 'normal' | 'semi-bold' | 'link';

interface Props extends TextProps {
    className?: string;
    typeText?: TypeText;
}

export const TextThemed = ({ className, typeText, ...restProps }: Props) => {
    // mt-10 text-3xl dark:text-dark-text text-light-text
    return (
        <Text
            className={[
                className,
                'dark:text-dark-text text-light-text',
                typeText === 'normal' ? 'font-normal' : undefined,
                typeText === 'h1' ? 'text-3xl' : undefined,
                typeText === 'h2' ? 'text-xl' : undefined,
                typeText === 'semi-bold' ? 'font-semibold': undefined,
                typeText === 'link' ? 'underline' : undefined,
            ].join(' ')}
            {...restProps} /> //! -> Forma de recupara el children
    );
};