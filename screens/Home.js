import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Tab, TabView } from '@ui-kitten/components';

import TopNav from '../components/TopNav';
import Latest from './rubrik/Latest';
import Rubrik from './rubrik/Rubrik';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
	const [selectedIndex, setSelectedIndex] = useState(0);
	return (
		<View style={styles.container}>
			<ScrollView stickyHeaderIndices={[1]}>
				{/* Top Nav */}
				<TopNav navigation={navigation} />
				<TabView selectedIndex={selectedIndex} onSelect={setSelectedIndex}>
					<Tab title="Terbaru" />
					<Tab title="Rilis" />
					<Tab title="Blog" />
					<Tab title="Infogafis" />
					<Tab title="Daerah" />
				</TabView>
				{selectedIndex == 0 && <Latest navigation={navigation} />}
				{selectedIndex == 1 && (
					<Rubrik slug="rilis-media" navigation={navigation} />
				)}
				{selectedIndex == 2 && <Rubrik slug="blog" navigation={navigation} />}
				{selectedIndex == 3 && (
					<Rubrik slug="infografis" navigation={navigation} />
				)}
				{selectedIndex == 4 && <Rubrik slug="daerah" navigation={navigation} />}
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
