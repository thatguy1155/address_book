//here it will evaluate any actions that are commmitted

//bring in the types from actions/types
import { FETCH_ADDRESSES,CHANGE_SELECTED,NEW_ADDRESS,EDIT_ADDRESS,DELETE_ADDRESS } from '../actions/types'

//create initial state
const initialState = {
    addresses: [],
    address:0
}


export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ADDRESSES:
            return{
                ...state,
                addresses: action.payload
            }
        case CHANGE_SELECTED:
            return{
                ...state,
                address: action.payload
            }
        case NEW_ADDRESS:
            const newAddresses = [action.payload, ...state.addresses];
            return{
                ...state,
                addresses: newAddresses
            }
        case EDIT_ADDRESS:
        const editedAddresses = state.addresses.map((item) => { return item.id === action.payload.id ? action.payload : item; });
            return{
                ...state,
                addresses: editedAddresses
            }
        case DELETE_ADDRESS:
            const shortList = state.addresses.filter((item) => item.id !== action.payload);
                return{
                    ...state,
                    addresses: shortList
                }
        default:
            return state
    }
}