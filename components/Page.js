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
	const { news, isFetched } = props;
	const [berita, setBerita] = useState(news.posts);

	return (
		<View style={{ flex: 1 }}>
			<Slider
				isFetched={isFetched}
				data={berita}
				navigation={props.navigation}
			/>

			<View style={styles.newsCardContainer}>
				{berita !== undefined &&
					berita.map((item, index) => {
						if (index > 2)
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
