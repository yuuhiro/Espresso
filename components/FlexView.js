import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
	wrapper: {
	},
	slide1: {
		flex: 1,
		justifyContent: 'center',
		// alignItems: 'center',
		backgroundColor: '#9DD6EB'
	},
	slide2: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#97CAE5',
	},
	slide3: {
		flex: 1,
		justifyContent: 'center',
		// alignItems: 'center',
		backgroundColor: '#92BBD9',
	},
	text: {
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold',
	}
})

export default class SwipeView extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
					<View style={styles.slide1}>
						<View style={styles.slide2}>
							<View style={styles.slide3}>
								<Text
									style={styles.text}
									onPress={() => Actions.pageOne({text: 'Hello World!'})}
								>And simple</Text>
							</View>
						</View>
					</View>
					
		)
	}
}