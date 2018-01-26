import React, { Component } from 'react';
import store from './store';
import { Provider } from 'react-redux';

import AppWithNavigationState from './components/AppWithNavigationState'

import loadLocations from './actionsCreators/loadLocations';

store.dispatch(loadLocations());

export default  class App extends Component {
  render() {

    return (
      <Provider store={ store } > 
        <AppWithNavigationState />
      </Provider>
    );
  }
};

