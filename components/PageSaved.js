import React, { useState, useEffect } from 'react';
import {
	Text,
	View,
	StyleSheet,
	ScrollView,
	Image,
	Dimensions,
	Animated,
	Easing,
} from 'react-native';
import { Layout, Tab, TabView } from '@ui-kitten/components';
var _ = require('lodash');
import TopNav from '../components/TopNav';
import Slider from '../components/Slider';
import NewsCard from '../components/NewsCard';
import CategoryBar from '../components/CategoryBar';
const { width, height } = Dimensions.get('window');
const category = 0.034 * width;
export default function Page(props) {
	const [berita, setBerita] = useState(props.news);

	return (
		<View style={{ flex: 1 }}>
			{props.news !== null ? (
				<View style={styles.newsCardContainer}>
					{props.news.map((result, i, store) => {
						// get at each store's key/value so you can work with it
						let key = store[i][0];
						let item = store[i][1];
						const pars = JSON.parse(item);
						return (
							<NewsCard
								key={item.id}
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
