import { Platform, NativeModules } from 'react-native'
import {loadLocationsSuccess } from '../actions/locationActions'
const { FetchJson } = NativeModules;


const url = 'https://s3-ap-southeast-2.amazonaws.com/com-cochlear-sabretooth-takehometest/';



export default () => {
    return (dispatch) => {
        const successCallback = (data) =>  { 
            console.log(data);
            let locations;
            try {
                locations = (typeof data === "string") ? JSON.parse(data).locations : data.locations;
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
        if(Platform.OS === 'ios'){
            fetch(`${url}locations.json`).
            then((response)=> { 
                if(response.ok){
                    return response.json();
                }
                throw new Error('Not valid response');
            }).then((data) => {
                successCallback(data);
            }).catch ((error) => {
                errorCallback(error)
            });
        } else {
            FetchJson.fetchData(url, successCallback, errorCallback)
        }
    }
}

