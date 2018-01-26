
import React, { Component } from 'react';

import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

import store from '../store';
import AppNavigator  from '../navigators/AppNavigator';


export default class ListItem extends Component {
    render() {
        return (
            <TouchableOpacity 
                onPress = {this.createNavigateToEditPage(this.props.item.name)}
            >
                <View style={ styles.itemContainer }>
                    <Text> { this.props.item.name } </Text>
                    <Text> { this.props.item.lat }  </Text>
                    <Text> { this.props.item.lng }  </Text>
                </View>
            </TouchableOpacity>
        );
        
    }
    createNavigateToEditPage = (name) => {
        return () => this.props.navigation.navigate('Location', { name });
    }
}


const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});