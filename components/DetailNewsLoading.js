import React, { useState, useEffect } from 'react';
import {
	Text,
	View,
	StyleSheet,
	ScrollView,
	Image,
	Dimensions,
	TouchableOpacity,
	Easing,
} from 'react-native';
import HTML from 'react-native-render-html';
import { Ionicons } from '@expo/vector-icons';
import { Icon } from '@ui-kitten/components';
import { ApolloProvider, Query, useQuery } from 'react-apollo';
import gql from 'graphql-tag';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
const { width, height } = Dimensions.get('window');
const category = 0.034 * width;

export default function Detail(props) {
	const htmlContent = `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Pellentesque arcu eget risus est in proin nec facilisis purus.
    Mauris tristique blandit a morbi habitant sed consectetur blandit.
    Sed scelerisque cras quam a imperdiet in erat in. Aenean dolor
    libero mattis pharetra volutpat tincidunt aliquam est, malesuada.
    Libero senectus lectus facilisis molestie. Porttitor felis sit
    tempus nunc mauris orci, amet auctor in.</p>
`;
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
					style={{ width: '40%', marginTop: 10, height: 10 }}
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
	},
});
