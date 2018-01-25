import React, { Component } from 'react';
import store from './store';
import { Provider } from 'react-redux';

import AppWithNavigationState from './components/AppWithNavigationState'


export default  class App extends Component {
  render() {

    return (
      <Provider store={ store } > 
        <AppWithNavigationState />
      </Provider>
    );
  }
};

