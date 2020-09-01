import React from 'react';
import { Icon } from '@ui-kitten/components';
export default function TabBarIcon(props) {
	return (
		<Icon
			name={props.focused ? props.name : props.name + '-outline'}
			width={24}
			height={24}
			style={{ marginBottom: -7 }}
			fill={props.focused ? '#16B3AC' : 'rgb(143, 155, 179)'}
		/>
		// <Ionicons
		//   name={props.name}
		//   size={26}
		//   style={{ marginBottom: -3 }}
		//   color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
		// />
	);
}
