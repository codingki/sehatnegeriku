import React, { useState } from 'react';
import {
	Text,
	View,
	StyleSheet,
	ScrollView,
	Image,
	Dimensions,
	TouchableWithoutFeedback,
} from 'react-native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import moment from 'moment';
const { width, height } = Dimensions.get('window');
export default function NewsCard(props) {
	const { isFetched, data } = props;
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
		<TouchableWithoutFeedback>
			<View
				style={{
					marginVertical: 7.5,
					flexDirection: 'row',
				}}
			>
				<ShimmerPlaceHolder
					style={{ borderRadius: 10 }}
					width={110}
					height={110}
					autoRun={true}
					visible={isFetched}
				>
					{check() && (
						<Image
							style={{ height: 110, width: 110, borderRadius: 10 }}
							resizeMode="cover"
							source={{
								uri: data.thumbnail_images.full.url,
							}}
						/>
					)}
				</ShimmerPlaceHolder>
				<View
					style={{
						flexDirection: 'column',
						flex: 1,
						paddingHorizontal: 10,
						paddingTop: 10,
					}}
				>
					<ShimmerPlaceHolder
						style={{ marginTop: 10, width: '100%' }}
						autoRun={true}
						visible={isFetched}
					>
						<Text
							style={{
								fontWeight: 'bold',
								fontSize: 15,
							}}
						>
							{data.title}
						</Text>
					</ShimmerPlaceHolder>
					<ShimmerPlaceHolder
						style={{ marginTop: 10, width: '60%' }}
						autoRun={true}
						visible={isFetched}
					>
						<Text
							style={{
								color: '#c4c4c4',
								fontSize: 12,
								marginTop: 1,
							}}
						>
							{data.categories[0].title} |{' '}
							{moment(data.date).format('dddd, Do MMMM YYYY')}
						</Text>
					</ShimmerPlaceHolder>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}
