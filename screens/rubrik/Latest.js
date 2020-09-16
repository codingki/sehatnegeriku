import React, { useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import PageLoading from '../../components/PageLoading';
import Page from '../../components/Page';
const { width } = Dimensions.get('window');

export default function HomeScreen(props) {
	const [, setIsFetched] = useState(false);

	function recentQuery(page) {
		return `
        query  {
          posts(count:10,page:${page}) {
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
				${recentQuery(1)}
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
