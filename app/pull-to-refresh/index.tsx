import { useState } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { ViewThemed } from '@/presentation/shared/ViewThemed';
import { TextThemed } from '@/presentation/shared/TextThemed';
import { useThemeColor } from '../../hooks/useThemeColor';

const PullToRefreshScreen = () => {
	const [isRefreshing, setIsRefreshing] = useState(false);

	const primaryColor = useThemeColor({}, 'primary');
	const bgColorRefresh = useThemeColor({dark: 'black', light: 'white'}, 'background');

	const onRefresh = async () => {
		setIsRefreshing(true);

		setTimeout(() => {
			console.log("🚀 ~ ocultamos el refresh");
			setIsRefreshing(false);
		}, 5000); 
	}

  return (
    <ScrollView
			refreshControl={
				<RefreshControl
					refreshing={isRefreshing}
					onRefresh={onRefresh}
					colors={[ primaryColor, 'red', 'blue' ]}
					progressBackgroundColor={bgColorRefresh}
				/>
			} //Implement pull to refresh
		>
      <ViewThemed isMargin>
				<TextThemed>
					Pull to Refresh Screen
				</TextThemed>
			</ViewThemed>
    </ScrollView>
  );
};

export default PullToRefreshScreen;
