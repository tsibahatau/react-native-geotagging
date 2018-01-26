import React, { Component } from 'react';
import { TouchableOpacity, Button, StyleSheet, Text, View } from "react-native";


export default class LocationScreen extends Component {
    render() {
        console.log(this.props);
        return (
            <View>
                <Text>{this.props.navigation.state.params.name}</Text> 
                <Button title="Go back" onPress={() => {this.props.navigation.goBack()}}></Button>
            </View>)
    }
}