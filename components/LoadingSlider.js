import React, { useState } from 'react';
import {
	Text,
	View,
	StyleSheet,
	ScrollView,
	Image,
	Dimensions,
} from 'react-native';
import { Icon } from '@ui-kitten/components';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Swiper from 'react-native-swiper';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import SliderCard from './LoadingSliderCard';
const { width, height } = Dimensions.get('window');
export default function Slider(props) {
	const isFetched = props.isFetched;
	return (
		<ShimmerPlaceHolder
			style={{ borderRadius: 10, margin: 15, width: width - 30 }}
			height={230}
			autoRun={true}
			visible={isFetched}
		>
			<View style={{ marginVertical: 15, height: 230 }}>
				<Swiper
					paginationStyle={{
						bottom: 10,
					}}
					activeDot={
						<View
							style={{
								backgroundColor: '#fff',
								width: 8,
								height: 8,
								borderRadius: 4,
								marginLeft: 3,
								marginRight: 3,
								marginTop: 3,
								marginBottom: 3,
							}}
						/>
					}
				>
					<SliderCard />
					<SliderCard />
				</Swiper>
			</View>
		</ShimmerPlaceHolder>
	);
}
