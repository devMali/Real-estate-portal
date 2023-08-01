import PropertyAPI from '../../util/PropertyAPI';
import { ActionTypes } from "../constants/action-types"


    export const fetchProperties = () => async (dispatch) => {
        const response = await PropertyAPI.get('/pview');

        dispatch({type:ActionTypes.FETCH_PROPERTIES,payload:response.data})
    }

    export const fetchProperty = (id) => async (dispatch) => {
        const response = await PropertyAPI.get(`/pview/${id}`);

        dispatch({type:ActionTypes.SELECTED_PROPERTY,payload:response.data})
    }

    export const fetchBuyProperties = () => async (dispatch) => {
        const response = await PropertyAPI.get('/pview/cat/sell');

        dispatch({type:ActionTypes.FETCH_BUY_PROPERTIES,payload:response.data})
    }

    export const fetchRentProperties = () => async (dispatch) => {
        const response = await PropertyAPI.get('/pview/cat/rent');

        dispatch({type:ActionTypes.FETCH_RENT_PROPERTIES,payload:response.data})
    }

    export const removeSelectedProperty =(properties)=>{
        return {
            type: ActionTypes.REMOVE_SELECTED_PROPERTY,
        }
    }
    
    export const addProperty = (property) => async (dispatch) => {
        dispatch({type:ActionTypes.ADD_PROPERTY})
        await PropertyAPI.post('/pins',property)
        .then(response => {
            console.log(response)
        })
    }

// export const getProperties =(properties)=>{
//     return {
//         type: ActionTypes.GET_PROPERTIES,
//         payload : properties,
//     }
// }


// export const selectedProperty =(properties)=>{
//     return {
//         type: ActionTypes.SELECTED_PROPERTY,
//         payload : properties,
//     }
// }
