import React, { useState } from 'react';
import {
	Text,
	View,
	StyleSheet,
	ScrollView,
	Image,
	Dimensions,
} from 'react-native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import moment from 'moment';
const { width, height } = Dimensions.get('window');
export default function NewsCard(props) {
	const { isFetched, data } = props;

	return (
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
				<Text>Loading</Text>
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
						<Text>Loading</Text>
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
						<Text>Loading</Text> | <Text>Loading</Text>
					</Text>
				</ShimmerPlaceHolder>
			</View>
		</View>
	);
}
