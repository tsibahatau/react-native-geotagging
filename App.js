import React, { Component } from 'react';
import  { View, StyleSheet, ActivityIndicator   } from 'react-native';
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react'

import AppWithNavigationState from './components/AppWithNavigationState'


import loadLocations from './actionsCreators/loadLocations';

store.dispatch(loadLocations());

const renderIndicator = () => {
   return (
     <View style={[styles.container, styles.horizontal]}>
       <ActivityIndicator size="large" color="#0000ff" />
     </View>
   )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})



export default  class App extends Component {
  render() {

    return (
      <Provider store={ store } > 
        <PersistGate loading={renderIndicator()} persistor={persistor}>
          <AppWithNavigationState />
        </PersistGate>
      </Provider>
    );
  }
};

