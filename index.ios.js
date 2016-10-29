/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import TabView from './components/TabView';
import TabIcon from './components/TabIcon';
import SwipeView from './components/SwipeView';
import FlexView from './components/FlexView';
import NavigationDrawer from './components/NavigationDrawer';

export default class Espresso extends Component {
  render() {
    return (
		<Router>
			<Scene key="root" title="root" sceneStyle={{ color: 'red' }}>
				<Scene key="tabbar">
					<Scene
						key="main"
						tabs
						navigationBarStyle={{ backgroundColor: 'red' }}
						tabBarStyle={styles.tabBarStyle}
						tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
					>
						<Scene
							key="tab1"
							title="build"
							icon={TabIcon}
							titleStyle={{ color: 'white' }}
						>
							<Scene key="FlexView"
								   component={FlexView}
								   title="PageOne"
								   renderRightButton={() => <Text>Right</Text>}
							/>
							<Scene key="pageOne"
								   component={PageOne}
								   title="PageOne"
								   renderRightButton={() => <Text>Right</Text>}
							/>
							<Scene key="pageTwo"
								   component={PageTwo}
								   title="PageTwo"
							/>
						</Scene>
						<Scene key="tab2" title="book" icon={TabIcon}>
							<Scene
								key="tab2_1"
								component={SwipeView}
								title="Tab #2_1"
							/>
						</Scene>
						<Scene key="tab3" component={TabView} title="cached" icon={TabIcon} />
						<Scene key="tab4" component={TabView} title="accessibility" icon={TabIcon} />
						<Scene key="tab5" component={TabView} title="android" icon={TabIcon} />
					</Scene>
				</Scene>
			</Scene>
		</Router>
    );
  }
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
		alignItems: 'center',
	},
	tabBarStyle: {
		backgroundColor: '#eee',
	},
	tabBarSelectedItemStyle: {
		backgroundColor: '#ddd',
	},
});

AppRegistry.registerComponent('Espresso', () => Espresso);
