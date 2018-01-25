import { NavigationActions } from 'react-navigation';

import AppNavigator  from '../navigators/AppNavigator';

const firstScreen = AppNavigator.router.getActionForPathAndParams('Map');
const initialNavState = AppNavigator.router.getStateForAction(firstScreen);

const nav = (state = initialNavState, action) => {
    let nextState =  AppNavigator.router.getStateForAction(action,state);


    return nextState || state;
}

export default nav;