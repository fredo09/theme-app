import { useState } from 'react';
import { ActivityIndicator, FlatList, Image, View } from 'react-native';
import { ViewThemed } from '@/presentation/shared/ViewThemed';
import { useThemeColor } from '@/hooks/useThemeColor';


interface ListItemsPropsI {
	numberItem: number;
}

const InfiniteScrollScreen = () => {
	const [numbers, setNumbers] = useState<number[]>([1,2,3,4,5]);

	//* Set Primary Color
	const primaryColor = useThemeColor({}, 'primary');

	//! Function to load more numbers when the end of the list is reached
	const loadMoreNumbers = () => {
		const loadNumbers = Array.from({length: 5}, (_,i) => numbers.length + i)

		setTimeout(() => {
			setNumbers((prev) => [...prev, ...loadNumbers]);
		}, 3000);
	}

	return (
		<ViewThemed isMargin>
			<FlatList
				data={numbers}
				renderItem={({ item }) => (
					<ListImages numberItem={item}/>
				)}
				onEndReached={loadMoreNumbers} // Function to load more items
				onEndReachedThreshold={0.6} // Threshold to trigger loading more items
				ListFooterComponent={() => (
					<View style={{height: 150, justifyContent: 'center'}}>
						<ActivityIndicator size={40} color={primaryColor}/>
					</View>
				)}
			/>
		</ViewThemed>
	);
};

const ListImages = ({ numberItem }: ListItemsPropsI) => {
	return (
		<Image
			style={{ width: '100%', height: 400}}
			source={{ uri: `https://picsum.photos/200/300?random=${numberItem}` }}
			resizeMode="cover"
			accessibilityLabel={`Image number ${numberItem}`}
			alt={`Image number ${numberItem}`}
		/>
	)
}

export default InfiniteScrollScreen;
