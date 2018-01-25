import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import { StackNavigator } from 'react-navigation';
import MapScreen from './screens/MapScreen';
import MapView from 'react-native-maps';

export default class App extends React.Component {
  render() {
    const AppNavigator = StackNavigator({
      Map: { screen: MapScreen}
    }); 
    return (
      <View style ={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: -33.865143,
          longitude: 151.209900,
          latitudeDelta: 0.15,
          longitudeDelta: 0.121,
        }}
      >
      </MapView>
    </View>
      /*<Provider store= { store } > 
        <AppNavigator/>
      </Provider>*/
    );
  }
};

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