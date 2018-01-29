import { NativeModules } from 'react-native'
import {loadLocationsSuccess } from '../actions/locationActions'
const { FetchJson } = NativeModules;


const url = 'https://s3-ap-southeast-2.amazonaws.com/com-cochlear-sabretooth-takehometest/';



export default () => {
    return (dispatch) => {
        const successCallback = (data) =>  { 
            let locations;
            try {
                locations = JSON.parse(data).locations;
            } catch(error) {
                //@Todo show toast
            }
            dispatch(loadLocationsSuccess(locations));
        }
        const errorCallback = (errorMessage,stackTrace) => {
             //@Todo show toast
            console.log(errorMessage)
            console.log(stackTrace);
        } 
        FetchJson.fetchData(url, successCallback, errorCallback)
    }
}

