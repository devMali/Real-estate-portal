import PropertyAPI from '../../util/PropertyAPI';
import { ActionTypes } from "../constants/action-types"



export const fetchUsers = () => async (dispatch) => {
    const response = await PropertyAPI.get('/uview');

    dispatch({type:ActionTypes.FETCH_USERS,payload:response.data})
}

export const addUser = (user) => async (dispatch) => {
    dispatch({type:ActionTypes.ADD_USER})
    await PropertyAPI.post('/uins',user)
    .then(response => {
        dispatch({
            type : ActionTypes.ADD_USER,
            payload : response
        })
    }).catch(err => {console.log(err);})
}


export const loginUser = (user) => async (dispatch) => {
    dispatch({type:ActionTypes.USER_LOGIN})
   await PropertyAPI.post('/uview/login',user)
    .then(response => {
        var admin;
        localStorage.setItem('user', JSON.stringify(response.data.data))
        localStorage.setItem('login',true)
        if(response.data.data.role === 'admin'){
             admin = true;
        }else{
            admin = false;
        }
        console.log(response.data.data);
        dispatch({
            type : ActionTypes.USER_LOGIN,
            auth : response.data.data,
            loggedInUser:false,
            admin : admin
        })
    }).catch((err) =>{alert(err)})
    //console.log(response);
}

export const userAuthenticated = () => async (dispatch) => {
    await PropertyAPI.get('/uview/login/home')
    .then(response => {
        dispatch({type:ActionTypes.USER_LOGIN_SUCCESS,auth:response.data.data,loggedInUser:true})
    });

}

export const logoutUser = () => async (dispatch) => {
    dispatch({type:ActionTypes.USER_LOGOUT})
    await PropertyAPI.post('/uview/logout')
    .then(
        localStorage.setItem('login',false),
        dispatch({
            type : ActionTypes.USER_LOGOUT,
            loggedInUser:false,
            payload :{}
        })
    )
}
