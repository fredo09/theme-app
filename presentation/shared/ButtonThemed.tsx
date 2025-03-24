import React from 'react';
import { Text, Pressable, PressableProps } from 'react-native';

interface Props extends PressableProps{
  className?: string;
  children: string;
}

export const ButtonThemed = ({ className, children, ...restProps }: Props) => {
  return (
    <Pressable
      {...restProps}
      className={`bg-light-primary dark:bg-dark-primary items-center rounded-xl px-6 py-2 active:opacity-80 ${className}`}>
        <Text>{children}</Text>
    </Pressable>
  )
}