//here it will evaluate any actions that are commmitted

//bring in the types from actions/types
import { CHANGE_VIEW,SET_FORM } from '../actions/types'

//create initial state
const initialState = {
    view: 'grid',
    form: 'add'  
}

export default (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_VIEW:
            return{
                ...state,
                view: action.payload
            }
        case SET_FORM:
            console.log(action.payload)
            return{
                ...state,
                form: action.payload
            }
        default:
            return state
    }
}