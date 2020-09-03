import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Tab, TabView } from '@ui-kitten/components';

import TopNav from '../components/SearchTopNav';
import Search from './rubrik/Search';
import Rubrik from './rubrik/Rubrik';

const { width } = Dimensions.get('window');

export default function SearchScreen({ navigation, route }) {
	const { search } = route.params;
	return (
		<View style={styles.container}>
			<TopNav navigation={navigation} search={search} />
			<ScrollView>
				{/* Top Nav */}

				<Search navigation={navigation} search={search} />
			</ScrollView>
		</View>
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
