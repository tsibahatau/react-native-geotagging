import * as types from '../actions/actionTypes';  
import initialState from '../store/initialState';
import _ from 'lodash';

export default function locationsReducer(state = initialState.locations, action) { 
  let newState = [...state];
  switch(action.type) {
    case types.LOAD_FROM_STORAGE:
      //remove empty locations if so
      action.payload && (newState = [..._.filter(action.payload.locations, (item) => {return !!item})])
      return newState;
    case types.LOAD_LOCATIONS_SUCCESS:
      let merged = _.unionBy(state, action.data, 'name'); //merge two arrays by name, preserve from state
      return [...merged];
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