import React, { createContext, useState, useEffect, useContext } from 'react';
import { ApolloProvider, Query, useQuery } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const HomeContext = createContext();
const HomeProvider = (props) => {
	const [query, setQuery] = useState(recentQuery(1));
	const client = new ApolloClient({
		uri: 'https://obscure-ridge-07773.herokuapp.com/graphql',
	});
	const [index, setIndex] = useState(0);
	useEffect(() => {}, []);

	function setCategory(v) {
		setIndex(v);
	}

	function getData() {
		const { loading, error, data } = useQuery(
			gql`
				${query}
			`
		);
		if (loading) return 'Loading...';
		if (error) return `Error! ${error.message}`;
		return data;
	}

	function recentQuery(page) {
		return `
        query GetAllPosts {
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
	function categoryQuery(category, page) {
		return `
        query GetCategory {
          category(count:10, slug:"${category}", page:${page}) {
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

	function rubrik(index) {
		if (index == 0) {
			setQuery(recentQuery(1));
		}
		if (index == 1) {
			setQuery(categoryQuery('rilis-media', 1));
		}
		if (index == 2) {
			setQuery(categoryQuery('blog', 1));
		}
		if (index == 3) {
			setQuery(categoryQuery('infografis', 1));
		}
		if (index == 4) {
			setQuery(categoryQuery('daerah', 1));
		}
	}

	return (
		<HomeContext.Provider
			value={{
				setCategory,
				getData,
			}}
		>
			{props.children}
		</HomeContext.Provider>
	);
};

export { HomeContext, HomeProvider };
