import React, { useState } from 'react';
import {
	Text,
	View,
	StyleSheet,
	ScrollView,
	Image,
	Dimensions,
	TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

import { Icon } from '@ui-kitten/components';
const { width, height } = Dimensions.get('window');
const category = 0.034 * width;
export default function TopNav(props) {
	const [searchToggle, setSearchToggle] = useState(false);
	const [search, setSearch] = useState(props.search);
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
				<TouchableOpacity
					onPress={() => {
						props.navigation.goBack();
					}}
					style={{ flex: 1, alignItems: 'flex-start' }}
				>
					<Icon name="arrow-ios-back" width={24} height={24} fill="#16B3AC" />
				</TouchableOpacity>
				<View
					style={{
						alignItems: 'center',
						flex: 3,
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<TextInput
						style={{
							flex: 1,
							backgroundColor: '#f5f5f5',
							height: 30,
							textAlign: 'center',
							borderRadius: 5,
						}}
						placeholder="Search"
						value={search}
						onChangeText={(text) => {
							setSearch(text);
						}}
						onSubmitEditing={() => {
							props.navigation.navigate('Search', {
								search: search,
							});
						}}
					/>
				</View>
				<View style={{ flex: 1 }} />
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
