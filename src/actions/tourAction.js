
import axios from 'axios';
import {
    GET_TOUR_TOKEN,
    GET_GENERATED_TOUR_LIST
} from '../constants/actionTypes';
import APIConstant from '../services/apiConstant';
import { showAlert } from '../services/helper';

export const getTourToken = () => {
    return (dispatch, getState) => {
        debugger;
        let data = {
          "userID": 0,
          "location": 0,
          "requestTime": 0
        }
        return axios.post("http://35.198.70.235:8090/tours/generator",data)
            .then(res => {
                debugger;
                dispatch({
                    type: GET_TOUR_TOKEN,
                    payload: res.data.token
                });
               dispatch(getTourList(res.data.token))
            }).catch(e => {
                debugger
                console.log('catch error loginAPI', e);
                if (e.response.data.message){
                    showAlert(e.response.data.message)
                }else {
                    showAlert("Server Error")
                }
                throw new Error(e);
            });
    };
};

export const getTourList = (token) => {
    return (dispatch, getState) => {
        debugger;
        return axios.get(APIConstant.baseUrl + APIConstant.generatedTourList + token)
            .then(res => {
                debugger;
                dispatch({
                    type: GET_GENERATED_TOUR_LIST,
                    payload: res.data
                });

            }).catch(err => {
                debugger
                console.log('catch error loginAPI', e);
                if (e.response.data.message){
                    showAlert(e.response.data.message)
                }else {
                    showAlert("Server Error")
                }
                throw new Error(e);
            });
    };
};
