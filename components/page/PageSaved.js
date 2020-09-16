import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import NewsCard from '../card/NewsCard';
const { width, height } = Dimensions.get('window');
export default function Page(props) {
	const [] = useState(props.news);
	return (
		<View style={{ flex: 1 }}>
			{props.news !== null ? (
				<View style={styles.newsCardContainer}>
					{props.news.map((result, i, store) => {
						// get at each store's key/value so you can work with it
						let item = store[i][1];
						const pars = JSON.parse(item);
						console.log(pars);
						return (
							<NewsCard
								key={pars.id}
								isFetched={true}
								data={pars}
								navigation={props.navigation}
							/>
						);
					})}
				</View>
			) : (
				<View
					style={{
						alignItems: 'center',
						marginTop: height / 2 - 100,
					}}
				>
					<Text
						style={{
							fontWeight: 'bold',
							color: '#b8b8b8',
						}}
					>
						Tidak ada berita yang disimpan
					</Text>
				</View>
			)}
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

		flex: 1,
		paddingHorizontal: 15,
		paddingVertical: 7.5,
	},
});
