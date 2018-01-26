import * as types from './actionTypes'

export function loadLocationsSuccess(data) {  
    return {type: types.LOAD_LOCATIONS_SUCCESS, data};
}