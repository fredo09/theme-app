import React from 'react';
import { useAnimations } from '@/hooks/useAnimation';
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native';

interface Props {
	uri: string;
	style: StyleProp<ImageStyle>
}

export const FadeInImages = ({ uri, style }: Props) => {
	const [isLoading, setIsLoading] = React.useState(true);
	const { animatedOpacity, fadeIn } = useAnimations();

	return (
		<View style={{ justifyContent: 'center', alignItems: 'center' }}>
			{
				isLoading && (
					<ActivityIndicator style={{ position: 'absolute'}} color='grey' size={30} />
				)
			}
			<Animated.Image 
				source={{ uri }} 
				style={[ style, { opacity: animatedOpacity } ]} 
				onLoadEnd={() => {
					fadeIn({
						duration: 800,
					});
					setIsLoading(false);
				}}
			/>
		</View>
	)
}

