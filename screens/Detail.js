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
import LoadingNews from '../components/DetailNewsLoading';
import News from '../components/DetailNews';
const { width, height } = Dimensions.get('window');
const category = 0.034 * width;

export default function Detail({ navigation, route }) {
	const { id, category } = route.params;

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
					<View
						style={{
							alignItems: 'flex-end',
							flex: 1,
							justifyContent: 'center',
						}}
					>
						<Icon
							name="bookmark-outline"
							width={24}
							height={24}
							fill="#16B3AC"
						/>
					</View>
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
