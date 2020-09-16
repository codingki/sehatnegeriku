import React, { useState } from 'react';
import {
	StyleSheet,
	Dimensions,
	TouchableOpacity,
	Text,
	View,
} from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import PageLoading from '../../components/loading/LoadingSearch';
import Page from '../../components/page/PageSearch';
const { width } = Dimensions.get('window');

export default function HomeScreen(props) {
	const [isFetched, setIsFetched] = useState(false);
	const [count, setCount] = useState(10);

	function recentQuery(search, page) {
		return `
        query  {
          search(search:"${search}",count:${count},page:${page}) {
            id,
			title,
			date,
			categories{
				title
			},
			author{
				name
			},
			content,
			thumbnail_images{
				full{
				  url
				}
			  }
          }
        }
      `;
	}

	return (
		<>
			<Query
				query={gql`
					${recentQuery(props.search, 1)}
				`}
			>
				{({ loading, error, data, refetch }) => {
					if (loading) {
						setIsFetched(false);
						return <PageLoading isFetched={false} news={false} />;
					} else if (error) {
						return (
							<View
								style={{
									alignItems: 'center',
									marginTop: height / 2 - 100,
								}}
							>
								<Text
									style={{
										fontWeight: 'bold',
										color: '#b8b8b8',
									}}
								>
									Koneksi error
								</Text>
							</View>
						);
					} else if (data) {
						setIsFetched(true);
						return (
							<Page
								isFetched={true}
								news={data}
								navigation={props.navigation}
							/>
						);
					}
				}}
			</Query>
			<TouchableOpacity
				style={{
					backgroundColor: '#fff',
					alignItems: 'center',
					justifyContent: 'center',
					padding: 10,
					margin: 10,
					borderRadius: 5,
					borderColor: 'rgb(143, 155, 179)',
					borderWidth: 1,
				}}
				onPress={() => {
					setCount(count + 10);
				}}
			>
				<Text style={{ color: 'rgb(143, 155, 179)' }}>Load more</Text>
			</TouchableOpacity>
		</>
	);
}
