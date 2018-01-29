import React, { Component } from 'react';
import { connect } from 'react-redux';

import { store, persistor }   from '../store';
import AppNavigator  from '../navigators/AppNavigator';
import { REGION } from '../constants'
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import MapView from 'react-native-maps';




class MapScreen extends Component {


    static navigationOptions = ({ navigation }) => ({
        title: 'Locations Map',
        headerTitleStyle : {textAlign: 'center', alignSelf:'center'},
    });
    
    handleAddPin = (e) => {
        const {latitude, longitude} = e.nativeEvent.coordinate;
        const item = {lat:latitude, lng:longitude, name: ''}
        this.props.navigation.navigate('AddLocation', { item })
    }
    
    openPinDetails = (item) => {
       return () => this.props.navigation.navigate('Location', { item })
    }
    navigateToListView = () =>  this.props.navigation.navigate('List')
    
    render() {  
      return(  
            <View style={styles.container}> 
                <View style={styles.mapContainer}>
                    <MapView
                        style={styles.map}
                        region={REGION}
                        onLongPress={this.handleAddPin}

                    > 
                    { this.props.locations.map(marker => (
                            <MapView.Marker
                                coordinate={ { latitude: marker.lat, longitude: marker.lng } }
                                title={ marker.name } 
                                onCalloutPress= { this.openPinDetails(marker) }
                                key={ marker.name}
                            />
                            )) }
                    </MapView>
                </View>
                <View style={styles.listViewButton}>
                    <Button
                        onPress={ this.navigateToListView }
                        title="View list"
                        style={ styles.listViewButton }
                        accessibilityLabel="view the list of markers"
                    />
                </View>
            </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
      height: '100%',
      alignItems: 'center',
    },
    mapContainer: {
        height: '80%',
        width: '100%'
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },

    listViewButton: {
        height: '20%',
    }
  });

const mapStateToProps = (state) => { 
    return ( 
    {
        locations: state.locations
    });
}

export default connect(mapStateToProps)(MapScreen);