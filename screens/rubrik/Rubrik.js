import React, { useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import PageLoading from '../../components/loading/Page';
import Page from '../../components/page/Page';
const { width } = Dimensions.get('window');

export default function HomeScreen(props) {
	const [isFetched, setIsFetched] = useState(false);

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

	function categoryQuery(page) {
		return `
        query {
                  category(count:10, slug:"${props.slug}", page:${page}) {
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
				${props.rubrik == 'latest' ? recentQuery(1) : categoryQuery(1)}
			`}
		>
			{({ loading, error, data }) => {
				if (loading || error) {
					setIsFetched(false);
					return <PageLoading isFetched={false} news={false} />;
				} else if (data) {
					setIsFetched(true);
					return (
						<Page
							rubrik={props.rubrik}
							isFetched={true}
							news={data}
							navigation={props.navigation}
						/>
					);
				}
			}}
		</Query>
	);
}
