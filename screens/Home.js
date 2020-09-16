import React, { useState, useRef } from 'react';
import {
	View,
	StyleSheet,
	ScrollView,
	Dimensions,
	RefreshControl,
} from 'react-native';
import { Tab, TabView } from '@ui-kitten/components';

import TopNav from '../components/topnav/TopNav';
import Rubrik from './rubrik/Rubrik';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
	const [refreshing, setRefreshing] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const refresh = useRef();

	function onRefresh() {
		setRefreshing(true);
		refresh.current.refresh();
	}

	return (
		<View style={styles.container}>
			<ScrollView
				stickyHeaderIndices={[1]}
				refreshControl={
					<RefreshControl
						colors={['#16B3AC']}
						refreshing={refreshing}
						onRefresh={onRefresh}
					/>
				}
			>
				{/* Top Nav */}
				<TopNav navigation={navigation} />
				<TabView selectedIndex={selectedIndex} onSelect={setSelectedIndex}>
					<Tab title="Terbaru" />
					<Tab title="Rilis" />
					<Tab title="Blog" />
					<Tab title="Infogafis" />
					<Tab title="Daerah" />
				</TabView>
				{selectedIndex == 0 && (
					<Rubrik
						refreshing={refreshing}
						setRefreshing={setRefreshing}
						ref={refresh}
						rubrik="latest"
						navigation={navigation}
					/>
				)}
				{selectedIndex == 1 && (
					<Rubrik
						refreshing={refreshing}
						setRefreshing={setRefreshing}
						ref={refresh}
						rubrik="category"
						slug="rilis-media"
						navigation={navigation}
					/>
				)}
				{selectedIndex == 2 && (
					<Rubrik
						refreshing={refreshing}
						setRefreshing={setRefreshing}
						ref={refresh}
						rubrik="category"
						slug="blog"
						navigation={navigation}
					/>
				)}
				{selectedIndex == 3 && (
					<Rubrik
						refreshing={refreshing}
						setRefreshing={setRefreshing}
						ref={refresh}
						rubrik="category"
						slug="infografis"
						navigation={navigation}
					/>
				)}
				{selectedIndex == 4 && (
					<Rubrik
						refreshing={refreshing}
						setRefreshing={setRefreshing}
						ref={refresh}
						rubrik="category"
						slug="daerah"
						navigation={navigation}
					/>
				)}
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
