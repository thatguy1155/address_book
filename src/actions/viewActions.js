import { CHANGE_VIEW,SET_FORM } from './types'




export const changeView = (postData) => dispatch => {
    dispatch({
            type: CHANGE_VIEW,
            payload: postData
        })
    
}
export const setForm = (postData) => dispatch => {
    dispatch({
            type: SET_FORM,
            payload: postData
        })
    
}