import { ActionTypes } from "../constants/action-types"

const initialState = {
    inquiries : [],
    inquiry : [],
}

export const inquiryReducer = (state=initialState,{type,payload}) => {

    switch(type){
        case ActionTypes.FETCH_INQUIRIES:
            return {...state,inquiries:payload};
        case ActionTypes.SELECTED_INQUIRY:
            return {...state,inquiry:payload}
        default:
            return state;
    }
}