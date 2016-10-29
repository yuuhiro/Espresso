import React, {
	PropTypes,
} from 'react';
import {
	Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const propTypes = {
	selected: PropTypes.bool,
	title: PropTypes.string,
};

const TabIcon = (props) => (
<Icon name={props.title} size={30} color="#999" />
);

TabIcon.propTypes = propTypes;

export default TabIcon;