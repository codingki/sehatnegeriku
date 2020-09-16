import React, { useState, forwardRef, useImperativeHandle } from 'react';
import {
	StyleSheet,
	Dimensions,
	View,
	Text,
	TouchableOpacity,
} from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import PageLoading from '../../components/loading/Page';
import Page from '../../components/page/Page';
const { width } = Dimensions.get('window');

const HomeScreen = forwardRef((props, ref) => {
	const [isFetched, setIsFetched] = useState(false);
	const [count, setCount] = useState(10);

	function recentQuery(page) {
		return `
        query  {
          posts(count:${count},page:${page}) {
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
                  category(count:${count}, slug:"${props.slug}", page:${page}) {
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
					${props.rubrik == 'latest' ? recentQuery(1) : categoryQuery(1)}
				`}
			>
				{({ loading, error, data, refetch }) => {
					useImperativeHandle(ref, () => ({
						refresh() {
							refetch();
						},
					}));
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
						props.setRefreshing(false);
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
});

export default HomeScreen;
