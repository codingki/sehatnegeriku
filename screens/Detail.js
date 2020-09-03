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
import AsyncStorage from '@react-native-community/async-storage';
import HTML from 'react-native-render-html';
import { Ionicons } from '@expo/vector-icons';
import { Icon } from '@ui-kitten/components';
import { ApolloProvider, Query, useQuery } from 'react-apollo';
import gql from 'graphql-tag';
import LoadingNews from '../components/DetailNewsLoading';
import News from '../components/DetailNews';
const { width, height } = Dimensions.get('window');
const category = 0.034 * width;

export default function Detail({ navigation, route }) {
	const { id, category } = route.params;
	const [content, setContent] = useState(null);
	const [saved, setSaved] = useState(false);

	useEffect(() => {
		checkSaved();
	}, []);
	const detail = `
        query  {
			detail(id:${id}){
				id,
				title,
				date,
				categories{
				  title
				},
				author {
				  name
				},
				thumbnail_images{
				  full{
					url
				  }
				},
				content
			  }
        }
	  `;

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
				await AsyncStorage.setItem(
					'saved:' + id,
					JSON.stringify(content.detail)
				);
				setSaved(true);
			} catch (error) {
				console.log(error);
			}
		}
	}

	async function remove() {
		if (content) {
			try {
				await AsyncStorage.removeItem('saved');
				setSaved(false);
			} catch (error) {
				console.log(error);
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

			<Query
				query={gql`
					${detail}
				`}
			>
				{({ loading, error, data }) => {
					if (loading || error) {
						return <LoadingNews />;
					} else if (data) {
						setContent(data);
						return <News data={data.detail} />;
					}
				}}
			</Query>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
	},
});
