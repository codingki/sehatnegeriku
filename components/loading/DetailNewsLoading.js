import React from 'react';
import {
	Text,
	View,
	StyleSheet,
	ScrollView,
	Image,
	Dimensions,
} from 'react-native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
const { width } = Dimensions.get('window');

export default function Detail() {
	return (
		<ScrollView stickyHeaderIndices={[1]}>
			<ShimmerPlaceHolder
				style={{ height: 230, width: '100%' }}
				autoRun={true}
				visible={false}
			>
				<Image
					style={{ height: 230 }}
					resizeMode="cover"
					source={{
						uri:
							'https://www.brownweinraub.com/wp-content/uploads/2017/09/placeholder.jpg',
					}}
				/>
			</ShimmerPlaceHolder>
			<View
				style={{
					padding: 10,
					paddingHorizontal: 15,
					backgroundColor: '#f5f5f5',
					borderBottomWidth: 1,
					borderColor: '#e7e7e7',
				}}
			>
				<ShimmerPlaceHolder
					visible={false}
					style={{ width: '70%', height: 30 }}
				>
					<Text style={{ fontWeight: 'bold', fontSize: 20 }}>Loading</Text>
				</ShimmerPlaceHolder>
				<ShimmerPlaceHolder
					visible={false}
					style={{ width: '0%', marginTop: 10, height: 10 }}
				>
					<Text style={{ color: '#9A9696', marginTop: 2, fontSize: 12 }}>
						John Doe | Loading
					</Text>
				</ShimmerPlaceHolder>
			</View>

			<View
				style={{
					backgroundColor: 'white',

					paddingHorizontal: 15,
					paddingVertical: 10,
					height: 500,
				}}
			>
				<ShimmerPlaceHolder visible={false} style={{ width: '100%' }}>
					<Text>Loading</Text>
				</ShimmerPlaceHolder>
				<ShimmerPlaceHolder
					visible={false}
					autoRun={true}
					style={{ width: '100%', marginTop: 10 }}
				>
					<Text>Loading</Text>
				</ShimmerPlaceHolder>
				<ShimmerPlaceHolder
					visible={false}
					autoRun={true}
					style={{ width: '100%', marginTop: 10 }}
				>
					<Text>Loading</Text>
				</ShimmerPlaceHolder>
				<ShimmerPlaceHolder
					visible={false}
					autoRun={true}
					style={{ width: '100%', marginTop: 10 }}
				>
					<Text>Loading</Text>
				</ShimmerPlaceHolder>
				<ShimmerPlaceHolder
					visible={false}
					autoRun={true}
					style={{ width: '100%', marginTop: 10 }}
				>
					<Text>Loading</Text>
				</ShimmerPlaceHolder>
			</View>
		</ScrollView>
	);
}
