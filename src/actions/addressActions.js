import { FETCH_ADDRESSES,CHANGE_SELECTED,NEW_ADDRESS,EDIT_ADDRESS,DELETE_ADDRESS } from './types'
import axios from 'axios'

/**
 *these are the actions that manipulate the cards being displayed.
 * they include all API requests for fetch and add
 */

export const fetchAddresses = () => dispatch => {
    
    //run get requests and dispatch cooresponding type to be executed in postReducer
    axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then(addresses => 
            dispatch({
            type: FETCH_ADDRESSES,
            payload: addresses.data
        })).catch(err => {
            dispatch({
                //if there's an error, send the user a card saying so
                type: FETCH_ADDRESSES,
                payload: [{_id:0,nickName:'error',content:'please contact cutomer service at 010-314-1150'}]
            })
            console.log(err)
        })
        
    
}

export const changeSelected = (postData) => dispatch => {
    dispatch({
        type: CHANGE_SELECTED,
        payload: postData
    })
}

export const addAddress = (postData) => dispatch => {
    dispatch({
        type: NEW_ADDRESS,
        payload:{
            id: postData.id,
            title: postData.title,
            body: postData.body
        }})

    //post request to backend would go here
}


export const editAddress = (postData) => dispatch => {

    dispatch({
        type: EDIT_ADDRESS,
        payload:{
            id: postData.id + 1,
            title: postData.content.title,
            body: postData.content.body
        }})
    
    //put request to backend would go here
}

export const deleteAddress = (postData) => dispatch => {
    const deleteIndex = postData + 1
    dispatch({
        type: DELETE_ADDRESS,
        payload: deleteIndex
    })
    //delete request would go here
}