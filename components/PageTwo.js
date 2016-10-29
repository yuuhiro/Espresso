import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class PageOne extends Component {
	componentWillMount() {
		Actions.refresh({title:"Changed title"});
	}
	goToPageTwo() {
		Actions.pageTwo({text: 'Hello World!'})
	}
	
	render() {
		return (
			<View style={{margin: 128}}>
				<Text>This is PageTwo!</Text>
				<Text>{this.props.text}</Text>
			</View>
		)
	}
}