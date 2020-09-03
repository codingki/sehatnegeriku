import React, { useState, useEffect } from 'react';
import {
	Text,
	View,
	StyleSheet,
	ScrollView,
	Image,
	Dimensions,
	Animated,
	Easing,
	ActivityIndicator,
} from 'react-native';
import { Layout, Tab, TabView } from '@ui-kitten/components';
import { ApolloProvider, Query, useQuery } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

import PageLoading from '../../components/LoadingSearch';
import Page from '../../components/PageSearch';
const { width, height } = Dimensions.get('window');
const category = 0.034 * width;

export default function HomeScreen(props) {
	const [isFetched, setIsFetched] = useState(false);

	function recentQuery(search, page) {
		return `
        query  {
          search(search:"${search}",count:10,page:${page}) {
            id,
			title,
			date,
			categories{
				title
			},
			author{
				name
			},
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
		<Query
			query={gql`
				${recentQuery(props.search, 1)}
			`}
		>
			{({ loading, error, data }) => {
				if (loading || error) {
					setIsFetched(false);
					return <PageLoading isFetched={false} news={false} />;
				} else if (data) {
					setIsFetched(true);
					return (
						<Page isFetched={true} news={data} navigation={props.navigation} />
					);
				}
			}}
		</Query>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
	},
	newsCardContainer: {
		backgroundColor: 'white',
		borderColor: '#e5e5e5',
		borderTopWidth: 1,
		flex: 1,
		paddingHorizontal: 15,
		paddingVertical: 7.5,
	},
	tabContainer: {
		minHeight: 64,
	},
});
