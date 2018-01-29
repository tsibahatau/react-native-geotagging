import React, { Component } from 'react';
import { TouchableOpacity, Button, TextInput, StyleSheet, Text, View } from "react-native";
import updateLocation from "../actionsCreators/updateLocation"
import { store, persistor } from '../store';

export default class LocationScreen extends Component {
    constructor(props) {
        super(props);
        const { item } = props.navigation.state.params;
        this.state = { item };
    }
    
    
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Edit',
        headerTitleStyle : {textAlign: 'center', alignSelf:'center'},
        headerRight: <Button title="Save" onPress={navigation.state.params.handleSave} />
    });

    saveDetails = () => {
        store.dispatch(updateLocation(this.state.item));
        this.props.navigation.goBack();
    }

    componentDidMount() {
      this.props.navigation.setParams({ handleSave: this.saveDetails });
    }

    handleEditNote = (note) => {
        this.setState((previousState) => {
          return {
            item: {
              ...previousState.item,
              note
            },
          };
        });
      };
    
    render() {
        return (
            <View style= {styles.outerContainer}>
                <Text style={ styles.textLabel } >Name: { this.state.item.name }</Text>
                <Text style={ styles.textLabel } >Note:</Text>
                <TextInput 
                    style={ styles.noteInput } maxLength={140} 
                    multiline = {true}
                    numberOfLines = {4}
                    onChangeText={(note) => this.handleEditNote(note)}
                    value={this.state.item.note}
                    autoFocus={true}
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
        height: 140,
        borderColor: '#000000',
        borderWidth: 1,
        padding: 5
    }
  });