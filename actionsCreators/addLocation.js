import {addLocation } from '../actions/locationActions'

export default (location) => {
    return (dispatch) => {
            dispatch(addLocation(location));
    }
}