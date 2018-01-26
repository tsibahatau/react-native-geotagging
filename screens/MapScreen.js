import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from '../store';
import AppNavigator  from '../navigators/AppNavigator';

import { StyleSheet, Text, View, Button } from 'react-native';
import MapView from 'react-native-maps';

const region = {
    latitude: -33.865143,
    longitude: 151.209900,
    latitudeDelta: 0.15,
    longitudeDelta: 0.121,
};


class MapScreen extends Component {
    handleAddPin = () => {
        
    }
    render() {  
      return(  
            <View style={styles.container}> 
                <View style={styles.mapContainer}>
                    <MapView
                        style={styles.map}
                        region={region}
                        onLongPress={this.handleAddPin}

                    > 
                    { this.props.locations.map(marker => (
                            <MapView.Marker
                                coordinate={ { latitude: marker.lat, longitude: marker.lng } }
                                title={ marker.name } 
                                key={ marker.name}
                            />
                            )) }
                    </MapView>
                </View>
                <View style={styles.listViewButton}>
                    <Button
                        onPress={ navigateToListView }
                        title="View list"
                        style={ styles.listViewButton }
                        accessibilityLabel="view the list of markers"
                    />
                </View>
            </View>
      );
  }
}


const navigateToListView = () => {
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
    console.log(state);
    return ( 
    {
        locations: state.locations
    });
}

export default connect(mapStateToProps)(MapScreen);