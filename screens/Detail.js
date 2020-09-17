import React, { useState, useEffect } from 'react';
import {
	Text,
	View,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
	ScrollView,
	Image,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Icon } from '@ui-kitten/components';
import News from '../components/DetailNews';
import HTML from 'react-native-render-html';
import moment from 'moment';
import { SharedElement } from 'react-navigation-shared-element';
const { width } = Dimensions.get('window');

function Detail({ navigation, route }) {
	const { id, category, data } = route.params;
	const [content] = useState(data);
	const [saved, setSaved] = useState(false);

	useEffect(() => {
		checkSaved();
	}, []);

	async function checkSaved() {
		try {
			const value = await AsyncStorage.getItem('saved:' + id);
			if (value !== null) {
				// We have data!!
				setSaved(true);
			} else {
				setSaved(false);
			}
		} catch (error) {
			setSaved(false);
		}
	}

	async function save() {
		if (content) {
			try {
				await AsyncStorage.setItem('saved:' + id, JSON.stringify(content));
				setSaved(true);
			} catch (error) {
				alert(error);
			}
		}
	}

	async function remove() {
		if (content) {
			try {
				await AsyncStorage.removeItem('saved:' + id);
				setSaved(false);
			} catch (error) {
				alert(error);
			}
		}
	}
	function check() {
		if (data.thumbnail_images) {
			if (data.thumbnail_images.full) {
				if (data.thumbnail_images.full.url) {
					return true;
				}
			}
		}
	}
	return (
		<View style={styles.container}>
			<View
				style={{
					backgroundColor: 'white',
					borderColor: '#e5e5e5',
					borderBottomWidth: 1,
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
							navigation.goBack();
						}}
						style={{ flex: 1, alignItems: 'flex-start' }}
					>
						<Icon name="arrow-ios-back" width={24} height={24} fill="#16B3AC" />
					</TouchableOpacity>
					<View style={{ alignItems: 'center', flex: 2 }}>
						<Text
							style={{
								color: '#16B3AC',
								fontWeight: 'bold',
								fontSize: 0.0437 * width > 18 ? 18 : 0.0437 * width,
							}}
						>
							{category}
						</Text>
					</View>
					<TouchableOpacity
						style={{
							alignItems: 'flex-end',
							flex: 1,
							justifyContent: 'center',
						}}
						onPress={() => {
							if (saved) {
								remove();
							} else {
								save();
							}
						}}
					>
						<Icon
							name={saved ? 'bookmark' : 'bookmark-outline'}
							width={24}
							height={24}
							fill="#16B3AC"
						/>
					</TouchableOpacity>
				</View>
			</View>

			<ScrollView stickyHeaderIndices={[1]}>
				{check() ? (
					<SharedElement id={`data.${data.id}`}>
						<Image
							style={{ height: 230 }}
							resizeMode="cover"
							source={{
								uri: data.thumbnail_images.full.url,
							}}
						/>
					</SharedElement>
				) : (
					<View />
				)}

				<View
					style={{
						padding: 8,
						paddingHorizontal: 15,
						backgroundColor: 'white',
						borderBottomWidth: 1,
						borderColor: '#e7e7e7',
						marginBottom: 8,
					}}
				>
					<Text style={{ fontWeight: 'bold', fontSize: 18 }}>{data.title}</Text>
					<Text style={{ color: '#9A9696', marginTop: 2, fontSize: 12 }}>
						{data.author.name} |{' '}
						{moment(data.date).format('dddd, Do MMMM YYYY HH mm')}
					</Text>
				</View>
				<View
					style={{
						backgroundColor: 'white',
						borderTopWidth: 1,
						borderColor: '#e7e7e7',
						paddingHorizontal: 15,
						paddingVertical: 8,
					}}
				>
					<HTML
						html={data.content}
						imagesMaxWidth={width - 30}
						textSelectable
						tagsStyles={{
							p: { fontSize: 16, marginBottom: 24, lineHeight: 24 },
							img: { width: '100%' },
						}}
					/>
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
	},
});

Detail.sharedElements = (route) => {
	const { data } = route.params;
	return [
		{
			id: `data.${data.id}`,
		},
	];
};

export default Detail;
