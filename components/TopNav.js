import React, { useState } from 'react';
import {
	Text,
	View,
	StyleSheet,
	ScrollView,
	Image,
	Dimensions,
	TouchableOpacity,
	TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');
const category = 0.034 * width;
export default function TopNav(props) {
	const [searchToggle, setSearchToggle] = useState(false);
	const [search, setSearch] = useState('');
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
				<View
					style={{
						alignItems: 'center',
						flex: 3,
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					{searchToggle ? (
						<TextInput
							style={{
								flex: 1,
								backgroundColor: '#f5f5f5',
								height: 30,
								textAlign: 'center',
								borderRadius: 5,
							}}
							autoFocus={true}
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
					) : (
						<Text
							style={{
								color: '#16B3AC',
								fontWeight: 'bold',
								fontSize: 0.0437 * width > 18 ? 18 : 0.0437 * width,
							}}
						>
							Sehat Negeriku
						</Text>
					)}
				</View>
				<TouchableOpacity
					style={{
						alignItems: 'flex-end',
						flex: 1,
						justifyContent: 'center',
					}}
					onPress={() => {
						setSearchToggle(!searchToggle);
					}}
				>
					<Ionicons name="md-search" size={24} color="#16B3AC" />
				</TouchableOpacity>
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
