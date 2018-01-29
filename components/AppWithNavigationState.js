import React, { Component } from 'react';


import { StackNavigator } from 'react-navigation';
import  AppNavigator  from '../navigators/AppNavigator';




class AppWithNavigationState extends Component {
    render() {
      return (
        <AppNavigator/>
      );
    }
  }


export default AppWithNavigationState;