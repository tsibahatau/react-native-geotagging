import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FlatList , View, Button} from 'react-native';
import { store, persistor }  from '../store'

import geolib from 'geolib';
import { REGION } from '../constants';
import AppNavigator  from '../navigators/AppNavigator';
import ListItem  from '../components/ListItem';
import  _ from 'lodash'

class ListScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Locations Map',
        headerTitleStyle : {textAlign: 'center', alignSelf: 'center'},
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


const mapStateToProps = (state) => { 
    const newArr = _.map(state.locations, o => _.extend({longitude: o.lng, latitude: o.lat}, o));
    const orderedArr = geolib.orderByDistance({latitude: REGION.latitude, longitude: REGION.longitude}, newArr);
    const orderedLocations = _.map(orderedArr, o => state.locations[o.key]);
    return ( 
    {
        locations: orderedLocations
    });
}

export default connect(mapStateToProps)(ListScreen);