import React, { Component } from 'react';
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react'


import AppWithNavigationState from './components/AppWithNavigationState'

import loadLocations from './actionsCreators/loadLocations';
import { ActivityIndicator } from 'react-native';

store.dispatch(loadLocations());
export default  class App extends Component {
  render() {

    return (
      <Provider store={ store } > 
        <PersistGate loading={<ActivityIndicator/>} persistor={persistor}>
          <AppWithNavigationState />
        </PersistGate>
       
      </Provider>
    );
  }
};

