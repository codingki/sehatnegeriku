import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const category = 0.034 * width;
export default function TopNav() {
	return (
		<View
			style={{
				flexDirection: 'row',
				justifyContent: 'space-evenly',
				paddingVertical: 18,
				backgroundColor: 'white',
				borderColor: '#e5e5e5',
				borderBottomWidth: 1,
			}}
		>
			<Text
				style={{
					fontWeight: 'bold',
					fontSize: category,
					color: '#16B3AC',
				}}
			>
				Artikel Terbaru
			</Text>
			<Text
				style={{
					fontWeight: 'bold',
					fontSize: category,
					color: '#c4c4c4',
				}}
			>
				Rilis Sehat
			</Text>
			<Text
				style={{
					fontWeight: 'bold',
					fontSize: category,
					color: '#c4c4c4',
				}}
			>
				Blog Sehat
			</Text>
			<Text
				style={{
					fontWeight: 'bold',
					fontSize: category,
					color: '#c4c4c4',
				}}
			>
				Infografis
			</Text>
			<Text
				style={{
					fontWeight: 'bold',
					fontSize: category,
					color: '#c4c4c4',
				}}
			>
				Daerah
			</Text>
		</View>
	);
}
