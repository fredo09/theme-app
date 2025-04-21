import { FlatList } from 'react-native';
import { TextThemed } from '@/presentation/shared/TextThemed';
import { ViewThemed } from '@/presentation/shared/ViewThemed';

const InfiniteScrollScreen = () => {
  return (
    <ViewThemed isMargin>
      <FlatList
				data={[1,2,3,4,5,6,7,8,9,10]}
				renderItem={({item}) => (
					<TextThemed>{item}</TextThemed>
				)}
			/>
    </ViewThemed>
  );
};

export default InfiniteScrollScreen;
