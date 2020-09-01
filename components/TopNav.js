import React, { useState } from 'react';
import {
	Text,
	View,
	StyleSheet,
	ScrollView,
	Image,
	Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');
const category = 0.034 * width;
export default function TopNav(props) {
	return (
		<View
			style={{
				backgroundColor: 'white',
			}}
		>
			<View
				style={{
					paddingHorizontal: 15,
					paddingVertical: 17,
					flexDirection: 'row',
					justifyContent: 'space-between',

					alignItems: 'center',
				}}
			>
				<View style={{ flex: 1, alignItems: 'flex-start' }}>
					<Image
						source={require('../assets/logo.png')}
						style={{ width: 28, height: 30 }}
					/>
				</View>
				<View style={{ alignItems: 'center', flex: 2 }}>
					<Text
						style={{
							color: '#16B3AC',
							fontWeight: 'bold',
							fontSize: 0.0437 * width > 18 ? 18 : 0.0437 * width,
						}}
					>
						Sehat Negeriku
					</Text>
				</View>
				<View
					style={{
						alignItems: 'flex-end',
						flex: 1,
						justifyContent: 'center',
					}}
				>
					<Ionicons name="md-search" size={24} color="#16B3AC" />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
	},
});
