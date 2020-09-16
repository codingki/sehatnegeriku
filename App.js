import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { StatusBar, StyleSheet } from 'react-native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import AppNavigator from './navigation/AppNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { default as theme } from './assets/custom-theme.json';
import { ApolloProvider, Query } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import moment from 'moment';
import 'moment/locale/id';

const client = new ApolloClient({
	uri: 'https://obscure-ridge-07773.herokuapp.com/graphql',
});
export default function App(props) {
	const [isLoadingComplete, setLoadingComplete] = useState(false);

	if (!isLoadingComplete && !props.skipLoadingScreen) {
		return (
			<AppLoading
				startAsync={loadResourcesAsync}
				onError={handleLoadingError}
				onFinish={() => handleFinishLoading(setLoadingComplete)}
			/>
		);
	} else {
		return (
			<ApolloProvider client={client}>
				<ApplicationProvider
					mapping={mapping}
					theme={{ ...lightTheme, ...theme }}
				>
					<IconRegistry icons={EvaIconsPack} />

					<SafeAreaView style={styles.container}>
						<StatusBar
							barStyle="dark-content"
							translucent
							backgroundColor="#f7f7f7"
						/>

						<AppNavigator />
					</SafeAreaView>
				</ApplicationProvider>
			</ApolloProvider>
		);
	}
}

async function loadResourcesAsync() {
	await Promise.all([
		Asset.loadAsync([
			require('./assets/icon.png'),
			require('./assets/splash.png'),
			require('./assets/logo.png'),
			require('./assets/placeholder.jpg'),
		]),
	]);
}

function handleLoadingError(error) {
	// In this case, you might want to report the error to your error reporting
	// service, for example Sentry
	console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
	setLoadingComplete(true);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
