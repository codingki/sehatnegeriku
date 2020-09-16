import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import NewsCard from '../components/NewsCard';
const { width } = Dimensions.get('window');
export default function Page(props) {
	const { news, isFetched } = props;
	const [berita] = useState(news.search);

	return (
		<View style={{ flex: 1 }}>
			<View style={styles.newsCardContainer}>
				{berita !== undefined &&
					berita.map((item) => {
						return (
							<NewsCard
								key={item.id}
								isFetched={isFetched}
								data={item}
								navigation={props.navigation}
							/>
						);
					})}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
	},
	newsCardContainer: {
		backgroundColor: 'white',
		borderColor: '#e5e5e5',
		borderTopWidth: 1,
		flex: 1,
		paddingHorizontal: 15,
		paddingVertical: 7.5,
	},
});
