import { ActionTypes } from "../constants/action-types"

const initialState = {
    properties : [],
}

export const propertyReducer = (state=initialState,{type,payload}) => {

    switch(type){
        case ActionTypes.GET_PROPERTIES:
            return {...state,properties:payload};
        case ActionTypes.FETCH_PROPERTIES:
            return {...state,properties:payload};
        case ActionTypes.FETCH_BUY_PROPERTIES:
            return {...state,properties:payload};
        case ActionTypes.FETCH_RENT_PROPERTIES:
            return {...state,properties:payload};
        case ActionTypes.ADD_PROPERTY:
            return {...state,properties:payload};
        default:
            return state;
    }
}

export const selectedPropReducer =(state={},{type,payload}) => {

    switch(type){
        case ActionTypes.SELECTED_PROPERTY:
            return {...state,...payload};
        case ActionTypes.REMOVE_SELECTED_PROPERTY:
            return {}
        default:
            return state;
    }
}


