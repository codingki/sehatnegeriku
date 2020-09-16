import * as React from 'react';
import {
	Text,
	View,
	StyleSheet,
	ScrollView,
	Image,
	Dimensions,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

export default function SliderCard(props) {
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
		<View
			style={{
				flex: 1,
				borderRadius: 10,
				marginHorizontal: 15,
			}}
		>
			<Image
				style={{ height: 230, borderRadius: 10 }}
				resizeMode="cover"
				source={{
					uri:
						'https://www.brownweinraub.com/wp-content/uploads/2017/09/placeholder.jpg',
				}}
			/>

			<LinearGradient
				colors={['transparent', 'rgba(0,0,0,0.4)']}
				style={{
					position: 'absolute',
					left: 0,
					right: 0,
					top: 0,
					height: '100%',
					borderRadius: 10,
				}}
			/>
			<View
				style={{
					position: 'absolute',
					bottom: 30,
					left: 10,
					right: 10,
				}}
			>
				<Text
					style={{
						fontSize: 20,
						fontWeight: 'bold',
						color: '#fff',
					}}
				>
					Loading
				</Text>

				<Text
					style={{
						fontSize: 11,
						color: '#c4c4c4',
					}}
				>
					Loading
				</Text>
			</View>
			<Text
				style={{
					fontSize: 11,
					color: '#fff',
					backgroundColor: '#16B3AC',
					padding: 4,
					borderRadius: 10,
					position: 'absolute',
					paddingHorizontal: 8,
					right: 10,
					top: 10,
				}}
			>
				{' '}
				Loading
			</Text>
		</View>
	);
}
