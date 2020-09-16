import React, { useState } from 'react';
import { View, StyleSheet, Image, Dimensions, TextInput } from 'react-native';

const { width } = Dimensions.get('window');
export default function TopNav(props) {
	const [] = useState(false);
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
					borderColor: '#e5e5e5',
					borderBottomWidth: 1,
					alignItems: 'center',
				}}
			>
				<View style={{ flex: 1, alignItems: 'flex-start' }}>
					<Image
						source={require('../../assets/logo.png')}
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
