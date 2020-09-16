import React from 'react';
import {
	Text,
	View,
	StyleSheet,
	ScrollView,
	Image,
	Dimensions,
} from 'react-native';
import HTML from 'react-native-render-html';
import moment from 'moment';

const { width } = Dimensions.get('window');

export default function Detail(props) {
	const { data } = props;
	function check() {
		if (data.thumbnail_images) {
			if (data.thumbnail_images.full) {
				if (data.thumbnail_images.full.url) {
					return true;
				}
			}
		}
	}

	return (
		<ScrollView stickyHeaderIndices={[1]}>
			{check() ? (
				<Image
					style={{ height: 230 }}
					resizeMode="cover"
					source={{
						uri: data.thumbnail_images.full.url,
					}}
				/>
			) : (
				<View />
			)}

			<View
				style={{
					padding: 8,
					paddingHorizontal: 15,
					backgroundColor: 'white',
					borderBottomWidth: 1,
					borderColor: '#e7e7e7',
					marginBottom: 8,
				}}
			>
				<Text style={{ fontWeight: 'bold', fontSize: 18 }}>{data.title}</Text>
				<Text style={{ color: '#9A9696', marginTop: 2, fontSize: 12 }}>
					{data.author.name} |{' '}
					{moment(data.date).format('dddd, Do MMMM YYYY HH mm')}
				</Text>
			</View>
			<View
				style={{
					backgroundColor: 'white',
					borderTopWidth: 1,
					borderColor: '#e7e7e7',
					paddingHorizontal: 15,
					paddingVertical: 8,
				}}
			>
				<HTML
					html={data.content}
					imagesMaxWidth={width - 30}
					textSelectable
					tagsStyles={{
						p: { fontSize: 15, marginBottom: 5 },
						img: { width: '100%' },
					}}
				/>
			</View>
		</ScrollView>
	);
}
