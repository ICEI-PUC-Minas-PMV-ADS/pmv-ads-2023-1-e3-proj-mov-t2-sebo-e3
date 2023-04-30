import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function ButtonNavBar(props) {
    return (
        <View {...props}>
            <Icon name="home" size={30} color="#FFFFFF" />
            <Icon name="search" size={30} color="#FFFFFF" />
            <Icon name="person" size={30} color="##FFFFFF" />
            <Icon name="cart" size={30} color="##FFFFFF" />
        </View>
    );
};

export default ButtonNavBar;