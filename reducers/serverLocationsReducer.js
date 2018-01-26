import * as types from '../actions/actionTypes';  
import initialState from '../store/initialState';

export default function serverLocationsReducer(state = initialState.locations, action) {  
  console.log(action);
  switch(action.type) {
    case types.LOAD_LOCATIONS_SUCCESS:
      return action.data;
    default: 
      return state;
  }
}