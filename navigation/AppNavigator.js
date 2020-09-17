import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import TabBarIcon from '../components/TabBarIcon';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Media from '../screens/Media';
import Search from '../screens/Search';
import Saved from '../screens/Saved';

const Tab = createBottomTabNavigator();

const Stack = createSharedElementStackNavigator();

const Tabs = () => {
	return (
		<Tab.Navigator
			tabBarOptions={{
				activeTintColor: '#16B3AC',
			}}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarLabel: ({ focused }) => (
						<Text
							style={{
								fontWeight: 'bold',
								marginBottom: 5,
								color: focused ? '#16B3AC' : 'rgb(143, 155, 179)',
								fontSize: 10,
							}}
						>
							Home
						</Text>
					),
					tabBarIcon: ({ focused }) => (
						<TabBarIcon focused={focused} name={'home'} />
					),
				}}
				sharedElementsConfig={(route, otherRoute, showing) => {
					const { data } = route.params;
					return [`data.${data.id}`];
				}}
			/>
			<Tab.Screen
				name="Media"
				component={Media}
				options={{
					tabBarLabel: ({ focused }) => (
						<Text
							style={{
								fontWeight: 'bold',
								marginBottom: 5,
								color: focused ? '#16B3AC' : 'rgb(143, 155, 179)',
								fontSize: 10,
							}}
						>
							Media
						</Text>
					),
					tabBarIcon: ({ focused }) => (
						<TabBarIcon focused={focused} name={'film'} />
					),
				}}
			/>
			<Tab.Screen
				name="Saved"
				component={Saved}
				options={{
					tabBarLabel: ({ focused }) => (
						<Text
							style={{
								fontWeight: 'bold',
								marginBottom: 5,
								color: focused ? '#16B3AC' : 'rgb(143, 155, 179)',
								fontSize: 10,
							}}
						>
							Saved
						</Text>
					),
					tabBarIcon: ({ focused }) => (
						<TabBarIcon focused={focused} name={'bookmark'} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

const Stacks = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerMode: 'none',
				headerShown: false,
			}}
		>
			<Stack.Screen name="Main" component={Tabs} />
			<Stack.Screen name="Search" component={Search} />
			<Stack.Screen
				name="Detail"
				component={Detail}
				options={() => ({
					gestureEnabled: false,
					transitionSpec: {
						open: { animation: 'timing', config: { duration: 500 } },
						close: { animation: 'timing', config: { duration: 250 } },
					},
					cardStyleInterpolator: ({ current: { progress } }) => {
						return {
							cardStyle: {
								opacity: progress,
							},
						};
					},
				})}
			/>
		</Stack.Navigator>
	);
};
export default () => {
	return (
		<NavigationContainer>
			<Stacks />
		</NavigationContainer>
	);
};
