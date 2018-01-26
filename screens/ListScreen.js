import React, { Component } from 'react';
import { connect } from 'react-redux';

import { StyleSheet, FlatList , View, Button} from 'react-native';
import store from '../store';

import AppNavigator  from '../navigators/AppNavigator';
import ListItem  from '../components/ListItem';


class ListScreen extends Component {

    render() {  
      return(  
        <View>
            <FlatList
                data={ this.props.locations }
                keyExtractor={ (item) => item.name }
                renderItem={ this.renderItem }>
            </FlatList>
            <Button
                onPress={ navigateToMap }
                title="View Map"
                style={ styles.listViewButton }
             />
        </View>
      );
  }

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
const navigateToMap = () => {
    store.dispatch(AppNavigator.router.getActionForPathAndParams('Map'));
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