import { combineReducers } from 'redux';

//import locationDetails from './locationDetailsReducer';
import locationsSavedListReducer from './locationsSavedListReducer';
import navigationReducer from './NavigationReducer';
debugger;
console.log(locationsSavedListReducer);
export default combineReducers({
//    locationDetails,
    locations: locationsSavedListReducer,
    nav: navigationReducer
    
});