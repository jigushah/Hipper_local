/**
 * Created by Developer49 on 19/07/17.
 */

import { GET_TOUR_TOKEN,GET_GENERATED_TOUR_LIST } from '../constants/actionTypes';
const INITIAL_STATE = {
    generatedTourToken:"",
    generatedTourList:[]
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case GET_TOUR_TOKEN: {
            return {
                ...state,
                generatedTourToken: action.payload,
            };
        }
        case GET_GENERATED_TOUR_LIST: {
          return {
            ...state,
            generatedTourList:action.payload
          };
        }
        default:
            return state;
    }

};
