
import React, { Component } from 'react';

import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

import { store }   from '../store';
import AppNavigator  from '../navigators/AppNavigator';


export default class ListItem extends Component {
    render() {
        return (
            <TouchableOpacity 
                onPress = {this.navigateToEditPage(this.props.item)}
            >
                <View style={ styles.itemContainer }>
                    <Text> { this.props.item.name } </Text>
                </View>
            </TouchableOpacity>
        );
        
    }
    navigateToEditPage = (item) => {
        return () => this.props.navigation.navigate('Location', { item });
    }
}


const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});