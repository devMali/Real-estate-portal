import PropertyAPI from '../../util/PropertyAPI';
import { ActionTypes } from "../constants/action-types"

export const fetchInquiries = () => async (dispatch) => {
    const response = await PropertyAPI.get('/inqview');

    dispatch({type:ActionTypes.FETCH_INQUIRIES,payload:response.data})
}

export const fetchInquiry = (id) => async (dispatch) => {
    const response = await PropertyAPI.get(`inqview/user/${id}`);

    dispatch({type:ActionTypes.SELECTED_INQUIRY,payload:response.data})
}