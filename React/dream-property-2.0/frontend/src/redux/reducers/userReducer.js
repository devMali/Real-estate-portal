import { ActionTypes } from "../constants/action-types"


const initialState = {
    users : [],
    //user2 : []
    auth : {},
    loggedInUser :false,
    admin:false
}
export const addUserReducer =(state=initialState,{type,payload}) => {

    switch(type){
        case ActionTypes.ADD_USER:
            return {...state,users:payload};
        default:
            return state;
    }
}

export const getUserReducer =(state=initialState,{type,payload}) => {

    switch(type){
        case ActionTypes.FETCH_USERS:
            return {...state,users:payload};
        default:
            return state;
    }
}


export const loginUserReducer =(state=initialState,{type,payload,adm}) => {
   // console.log(payload);

    switch(type){
        case ActionTypes.USER_LOGIN:
            return {...state,auth:payload,loggedInUser:true,admin:true};
        case ActionTypes.USER_AUTHENTICATION:
            return {...state,auth:payload};
        case ActionTypes.USER_LOGIN_SUCCESS:
            return {...state,auth:payload};
        case ActionTypes.USER_LOGOUT:
            return {auth:{},loggedInUser:false,admin:false};
        default:
            return state;
    }
}

export const authReducer =(state=initialState,{type,payload}) => {
    switch(type){
        case ActionTypes.USER_AUTHENTICATION:
            return {...state,auth:payload};
        default:
            return state;
    }
}