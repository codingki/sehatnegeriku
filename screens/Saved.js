import React, { useState, useEffect } from 'react';
import {
	View,
	StyleSheet,
	ScrollView,
	Dimensions,
	RefreshControl,
} from 'react-native';
import { Tab, TabView } from '@ui-kitten/components';
import AsyncStorage from '@react-native-community/async-storage';
import TopNav from '../components/SavedTopNav';
import Latest from './rubrik/Latest';
import Saved from '../components/PageSaved';

const { width } = Dimensions.get('window');

export default function SavedScreen({ navigation }) {
	const [data, setData] = useState(null);
	const [refreshing, setRefreshing] = useState(false);
	useEffect(() => {
		getData();
	}, []);

	async function getData() {
		let keys = [];

		keys = await AsyncStorage.getAllKeys();
		if (keys.length == 0) {
			setData(null);
		} else {
			getMultiple(keys);
		}

		// example console.log result:
		// ['@MyApp_user', '@MyApp_key']
	}
	async function getMultiple(keys) {
		const values = await AsyncStorage.multiGet(keys);

		setData(values);
		setRefreshing(false);
	}
	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		getData();
	}, []);

	return (
		<View style={styles.container}>
			<ScrollView
				stickyHeaderIndices={[0]}
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

				<Saved news={data} navigation={navigation} />
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
