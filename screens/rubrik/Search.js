import React, { useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import PageLoading from '../../components/loading/Page';
import Page from '../../components/page/PageSearch';
const { width } = Dimensions.get('window');

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
