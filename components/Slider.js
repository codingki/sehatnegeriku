import React from 'react';
import { View, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import SliderCard from './card/SliderCard';
const { width } = Dimensions.get('window');
export default function Slider(props) {
	const isFetched = props.isFetched;
	const { data } = props;
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
					{data !== undefined &&
						data.map((item, index) => {
							if (index <= 2) {
								return (
									<SliderCard
										data={item}
										key={item.id}
										navigation={props.navigation}
									/>
								);
							}
						})}
				</Swiper>
			</View>
		</ShimmerPlaceHolder>
	);
}
