import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class PageOne extends Component {
	constructor(props) {
		super(props);
	}
	
	goToPageTwo() {
		Actions.pageTwo({text: 'Hello World!'})
	}
	
	renderImage(_, i) {
		return(
			<TouchableHighlight
				key={`image_${i}`}
				onPress={() => this.goToPageTwo()}
			>
				<View style={styles.innerBox}>
					<Image
						style={{width: 150, height: 150}}
						source={require('../img/135015.jpg')}
					/>
					<Text style={styles.boxText}>Text</Text>
				</View>
			</TouchableHighlight>
		);
	}
	
	render() {
		return (
			<ScrollView style={{marginTop: 64, marginBottom: 64}}>
				<View style={styles.box}>
					{Array(8).fill().map((_, i) => this.renderImage(_, i))}
				</View>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	box: {
		padding: 20,
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'flex-start',
		justifyContent: 'space-between'
	},
	innerBox: {
		marginBottom: 20
	},
	boxText: {
		textAlign: 'center',
		fontWeight: 'bold'
	}
});