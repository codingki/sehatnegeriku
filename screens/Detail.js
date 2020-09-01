import React, { useState, useEffect } from 'react';
import {
	Text,
	View,
	StyleSheet,
	ScrollView,
	Image,
	Dimensions,
	TouchableOpacity,
	Easing,
} from 'react-native';
import HTML from 'react-native-render-html';
import { Ionicons } from '@expo/vector-icons';
import { Icon } from '@ui-kitten/components';

const { width, height } = Dimensions.get('window');
const category = 0.034 * width;
export default function Detail() {
	const htmlContent = `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Pellentesque arcu eget risus est in proin nec facilisis purus.
    Mauris tristique blandit a morbi habitant sed consectetur blandit.
    Sed scelerisque cras quam a imperdiet in erat in. Aenean dolor
    libero mattis pharetra volutpat tincidunt aliquam est, malesuada.
    Libero senectus lectus facilisis molestie. Porttitor felis sit
    tempus nunc mauris orci, amet auctor in.</p>
`;
	return (
		<View style={styles.container}>
			<View
				style={{
					backgroundColor: 'white',
					borderColor: '#e5e5e5',
					borderBottomWidth: 1,
				}}
			>
				<View
					style={{
						paddingHorizontal: 15,
						paddingVertical: 17,
						flexDirection: 'row',
						justifyContent: 'space-between',

						alignItems: 'center',
					}}
				>
					<View style={{ flex: 1, alignItems: 'flex-start' }}>
						<Icon name="arrow-ios-back" width={24} height={24} fill="#16B3AC" />
					</View>
					<View style={{ alignItems: 'center', flex: 2 }}>
						<Text
							style={{
								color: '#16B3AC',
								fontWeight: 'bold',
								fontSize: 0.0437 * width > 18 ? 18 : 0.0437 * width,
							}}
						>
							Rilis Sehat
						</Text>
					</View>
					<View
						style={{
							alignItems: 'flex-end',
							flex: 1,
							justifyContent: 'center',
						}}
					>
						<Icon
							name="bookmark-outline"
							width={24}
							height={24}
							fill="#16B3AC"
						/>
					</View>
				</View>
			</View>
			<ScrollView stickyHeaderIndices={[1]}>
				<Image
					style={{ height: 230 }}
					resizeMode="cover"
					source={{
						uri:
							'https://www.brownweinraub.com/wp-content/uploads/2017/09/placeholder.jpg',
					}}
				/>
				<View
					style={{
						padding: 10,
						paddingHorizontal: 15,
						backgroundColor: '#f5f5f5',
						borderBottomWidth: 1,
						borderColor: '#e7e7e7',
					}}
				>
					<Text style={{ fontWeight: 'bold', fontSize: 20 }}>
						Pemerintah Belum Rencanakan Relaksasi PSBB
					</Text>
					<Text style={{ color: '#9A9696', marginTop: 2, fontSize: 12 }}>
						John Doe | Rabu, 20 Mei 2020 18:20 WIB
					</Text>
				</View>
				<View></View>
				<View
					style={{
						backgroundColor: 'white',

						paddingHorizontal: 15,
						paddingVertical: 10,
					}}
				>
					<HTML
						html={htmlContent}
						imagesMaxWidth={width - 30}
						textSelectable
						tagsStyles={{ p: { fontSize: 16 } }}
					/>
					<HTML
						html={htmlContent}
						imagesMaxWidth={width - 30}
						textSelectable
						tagsStyles={{ p: { fontSize: 16 } }}
					/>
					<HTML
						html={htmlContent}
						imagesMaxWidth={width - 30}
						textSelectable
						tagsStyles={{ p: { fontSize: 16 } }}
					/>
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
	},
});
