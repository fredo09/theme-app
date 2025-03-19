import React from 'react';
import { Href, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'
import { View, Pressable } from 'react-native';

import { TextThemed } from '@/presentation/shared/TextThemed';
import { useThemeColor } from '@/hooks/useThemeColor';

interface Props {
    title: string;
    //icon: string;
    icon: keyof typeof Ionicons.glyphMap; // -> tipo icons
    name: string;
    isFirst?: boolean;
    isLast?: boolean;
}

export const MenuItem = ({ title, icon, name, isFirst = false, isLast = false  }: Props) => {
    //! -> Recuaperamos el color prumario desde los hooks de expo para los themed
    const primaryColor = useThemeColor({},'primary'); 
    const [routeName] = name.split('/');

    return (
        <Pressable 
            onPress={() => router.push(routeName as Href)}
            className='bg-white dark:bg-black/15 px-5 py-2'
            style={{
                ...(isFirst && {
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    paddingTop: 10
                }),
                ...(isLast && {
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    paddingBottom: 10
                })
            }}>
            <View className='flex-row items-center'>
                <Ionicons name={icon} size={30} color={primaryColor} className='mr-5'/>
                <TextThemed typeText='h2'>
                    {title}
                </TextThemed>
            </View>
        </Pressable>
    )
};