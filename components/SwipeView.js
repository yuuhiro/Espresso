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
		alignItems: 'center',
		backgroundColor: '#92BBD9',
	},
	text: {
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold',
		marginBottom: 100
	}
})

export default class SwipeView extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<Swiper style={styles.wrapper} showsButtons={true} scrollEnabled={true}>
					<View style={styles.slide1}>
						<ScrollView>
							<View style={{alignItems: 'center'}}>
								<Text style={styles.text}>Hello Swiper</Text>
								<Text style={styles.text}>Hello Swiper</Text>
								<Text style={styles.text}>Hello Swiper</Text>
								<Text style={styles.text}>Hello Swiper</Text>
								<Text style={styles.text}>Hello Swiper</Text>
								<Text style={styles.text}>Hello Swiper</Text>
								<Text style={styles.text}>Hello Swiper</Text>
								<Text style={styles.text}>Hello Swiper</Text>
							</View>
						</ScrollView>
					</View>
					<View style={styles.slide2}>
						<Text style={styles.text}>Beautiful</Text>
					</View>
					<View style={styles.slide3}>
						<Text style={styles.text}>And simple</Text>
					</View>
				
			</Swiper>
		)
	}
}