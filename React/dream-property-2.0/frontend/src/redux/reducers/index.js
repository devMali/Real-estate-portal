import { combineReducers } from "redux";
import { propertyReducer,selectedPropReducer} from "./propertyReducer";
import {addUserReducer,loginUserReducer,authReducer,getUserReducer} from './userReducer'
import {inquiryReducer} from './inquiryReducer';

const reducers = combineReducers({
    allProperties : propertyReducer,
    property : selectedPropReducer,
    adduser : addUserReducer,
    loginUser :loginUserReducer,
    authReducer : authReducer,
    getUserReducer: getUserReducer,
    inquiryReducer : inquiryReducer,
})

export default reducers;