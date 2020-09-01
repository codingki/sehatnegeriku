import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Tab, TabView } from '@ui-kitten/components';

import TopNav from '../components/TopNav';
import Latest from './rubrik/Latest';
import Rubrik from './rubrik/Rubrik';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
	const [selectedIndex, setSelectedIndex] = useState(0);

	return (
		<View style={styles.container}>
			<ScrollView stickyHeaderIndices={[1]}>
				{/* Top Nav */}
				<TopNav />
				<TabView selectedIndex={selectedIndex} onSelect={setSelectedIndex}>
					<Tab title="Video" />
					<Tab title="Foto" />
				</TabView>
				{selectedIndex == 0 && <Rubrik slug="video" />}
				{selectedIndex == 1 && <Rubrik slug="foto" />}
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
