import * as types from './actionTypes'

export function loadLocationsSuccess(payload) {  
    return {type: types.LOAD_LOCATIONS_SUCCESS, payload};
}

export function updateLocation(payload) {  
    return {type: types.UPDATE_LOCATION, payload};
}

export function addLocation(payload) {  
    return {type: types.ADD_LOCATION, payload};
}