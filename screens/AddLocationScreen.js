import React, { Component } from 'react';
import { TouchableOpacity, Button, TextInput, StyleSheet, Text, View } from "react-native";
import updateLocation from "../actionsCreators/updateLocation"
import addLocation from "../actionsCreators/addLocation"

import { store, persistor }  from '../store';



export default class AddLocationScreen extends Component {
    constructor(props) {
        super(props);
        const { item } = props.navigation.state.params;
        this.state = { item };
        console.log(this.state);
    }
    
    
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Add',
        headerTitleStyle : {textAlign: 'center', alignSelf:'center'},
        headerRight: <Button title="Save" onPress={navigation.state.params.handleSave} />
    });

    saveDetails = () => {
        store.dispatch(addLocation(this.state.item));
        this.props.navigation.goBack();
    }

    componentDidMount() {
      this.props.navigation.setParams({ handleSave: this.saveDetails });
    }

    handleEditName= (name) => {
        this.setState((previousState) => {
          return {
            item: {
              ...previousState.item,
              name
            },
          };
        });
      };
    
    render() {
        return (
            <View style= {styles.outerContainer}>
                <Text style={ styles.textLabel } >Name:</Text>
                <TextInput 
                    style={ styles.noteInput } maxLength={40} 
                    onChangeText={(name) => this.handleEditName(name)}
                    value={this.state.item.name}
                    autoFocus
                />
            </View>)
            
    }
}

const styles = StyleSheet.create({
    outerContainer: {
      flex:1,
    },
    textLabel: {
        marginBottom: 5
    },
    noteInput: {
        height: 40,
        padding: 5
    }
  });