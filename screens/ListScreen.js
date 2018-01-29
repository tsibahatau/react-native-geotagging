import React, { Component } from 'react';
import { connect } from 'react-redux';

import { StyleSheet, FlatList , View, Button} from 'react-native';
import { store, persistor }  from '../store'

import AppNavigator  from '../navigators/AppNavigator';
import ListItem  from '../components/ListItem';


class ListScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Locations Map',
        headerTitleStyle : {textAlign: 'center', alignSelf:'center'},
    });
    render() {  
      return(  
        <View>
            <FlatList
                data={ this.props.locations }
                keyExtractor={ (item) => item.name }
                renderItem={ this.renderItem }>
            </FlatList>
            <Button
                onPress={ this.navigateToMap }
                title="View Map"
                style={ styles.listViewButton }
             />
        </View>
      );
    }

    navigateToMap = () => this.props.navigation.navigate('Map');

    renderItem = ( { item } ) => {
        return (
            <ListItem
                key={item.name}
                item={item}
                navigation={this.props.navigation}
            />
        );
    }
}




const styles = StyleSheet.create({
    
});

const mapStateToProps = (state) => { 
    return ( 
    {
        locations: state.locations
    });
}

export default connect(mapStateToProps)(ListScreen);