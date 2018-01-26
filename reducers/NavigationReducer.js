import { NavigationActions } from 'react-navigation';

import AppNavigator  from '../navigators/AppNavigator';

const firstScreen = AppNavigator.router.getActionForPathAndParams('Map');
const initialNavState = AppNavigator.router.getStateForAction(firstScreen);

const nav = (state = initialNavState, action) => {
    if (action.type === 'Navigation/NAVIGATE') {
        let nextState =  AppNavigator.router.getStateForAction(action,state);
        return nextState || state;
    }
    return state;
}

export default nav;