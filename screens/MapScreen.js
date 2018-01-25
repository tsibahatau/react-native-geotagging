import React, { Component } from 'react';
import { connect } from 'react-redux';

import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

class MapScreen extends Component {

    render() {  
      return(  
            <View style={styles.container}> 
                <MapView
                    style={styles.map}
                    region={{
                    latitude: -33.865143,
                    longitude: 151.209900,
                    latitudeDelta: 0.15,
                    longitudeDelta: 0.121,
                    }}
                > 
                  { this.props.locations.map(marker => (
                        <MapView.Marker
                            coordinate={ { latitude: marker.lat, longitude: marker.lng } }
                            title={ marker.name }
                        />
                        )) }
                </MapView>
            </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });

const mapStateToProps = (state) => { 
    console.log(state)
    return ( 
    {
        locations: state.locations
    }
);
}

  export default connect(mapStateToProps)(MapScreen);