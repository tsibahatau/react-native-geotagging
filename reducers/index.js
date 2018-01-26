import { combineReducers } from 'redux';

//import locationDetails from './locationDetailsReducer';
import locationsSavedListReducer from './locationsSavedListReducer';
import serverLocationsReducer from './serverLocationsReducer';

import navigationReducer from './NavigationReducer';

export default combineReducers({
    nav: navigationReducer,
    locations: serverLocationsReducer
    
});