import {updateLocation } from '../actions/locationActions'

export default (location) => {
    return (dispatch) => {
            dispatch(updateLocation(location));
    }
}