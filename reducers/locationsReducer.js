import * as types from '../actions/actionTypes';  
import initialState from '../store/initialState';

export default function locationsReducer(state = initialState.locations, action) { 
  const newState = [...state];
  switch(action.type) {
    case types.LOAD_LOCATIONS_SUCCESS:
      return [...newState, ...action.data];
    case types.UPDATE_LOCATION:
      const index = state.findIndex((location) => location.name === action.data.name);
      if(index !== -1) {
        newState[index] = action.data;
      }
      return newState;
    case types.ADD_LOCATION:
      return [...newState,action.data];
    default: 
      return newState;
  }
}