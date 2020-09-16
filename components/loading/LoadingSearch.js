import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import NewsCard from './LoadingNewsCard';
const { width } = Dimensions.get('window');
export default function Page(props) {
	return (
		<View style={{ flex: 1 }}>
			<View style={styles.newsCardContainer}>
				<NewsCard isFetched={false} data={props.news} />
				<NewsCard isFetched={false} data={props.news} />
				<NewsCard isFetched={false} data={props.news} />
				<NewsCard isFetched={false} data={props.news} />
				<NewsCard isFetched={false} data={props.news} />
				<NewsCard isFetched={false} data={props.news} />
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
