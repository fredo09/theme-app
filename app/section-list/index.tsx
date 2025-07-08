import { SectionList } from 'react-native';
import { CardThemed } from '@/presentation/shared/CardThemed';
import { TextThemed } from '@/presentation/shared/TextThemed';
import { ViewThemed } from '@/presentation/shared/ViewThemed';

import { housesI } from '@/infraestructure/interfaces/section-list-material';

const SectionListScreen = () => {
	return (
		<ViewThemed isMargin>
			<CardThemed>
				<SectionList
					sections={housesI}
					keyExtractor={(item, index) => item + index}
					renderItem={({ item }) => <TextThemed>{item}</TextThemed>}
					ListHeaderComponent={() => (
						<TextThemed typeText='h1' className='font-bold mb-3'>
							Personajes
						</TextThemed>
					)}
					renderSectionHeader={({ section }) => (
						<TextThemed 
							typeText='h1' 
							className='bg-light-background dark:bg-dark-background p-2 rounded'>
								{section.title}
							</TextThemed>
					)}
					ListFooterComponent={() => (
						<TextThemed 
							typeText='h2' 
							className='font-bold bg-light-background dark:bg-dark-background p-2 mb-10 rounded'>
							Section: {housesI.length}
						</TextThemed>
					)}
					showsVerticalScrollIndicator={false}
					stickySectionHeadersEnabled
				/>
			</CardThemed>
		</ViewThemed>
	);
};
export default SectionListScreen;
