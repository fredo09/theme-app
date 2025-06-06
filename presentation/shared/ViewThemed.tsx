import React from 'react';
import { View, ViewProps } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props extends ViewProps {
    className? : string;
    isSafeArea?: boolean;
    isMargin?: boolean;
    bgColor?: string;
}

export const ViewThemed = ({
    style,
    bgColor,
    className,
    children,
    isSafeArea = false,
    isMargin = false,
}: Props) => {
    // className="bg-light-background dark:bg-dark-background"
    const bgColorView = bgColor ?? useThemeColor({}, 'background');
    const { top: TopSafeArea } = useSafeAreaInsets();

    const stylesView = [
        {
            flex: 1,
            paddingTop: isSafeArea ? TopSafeArea : 0,
            marginHorizontal: isMargin ? 10 : 0,
            backgroundColor: bgColorView
        },
        style
    ];

    return (
        <View style={stylesView} className={className}>
            {children}
        </View>
    );
};
