import * as types from './actionTypes'

export function loadLocationsSuccess(data) {  
    return {type: types.LOAD_LOCATIONS_SUCCESS, data};
}

export function updateLocation(data) {  
    return {type: types.UPDATE_LOCATION, data};
}

export function addLocation(data) {  
    return {type: types.ADD_LOCATION, data};
}