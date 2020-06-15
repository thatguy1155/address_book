import { combineReducers } from 'redux'
import viewReducer from './viewReducer'
import addressReducer from './addressReducer'


//this is how you send all the reducers back to the store
export default combineReducers({
    view: viewReducer,
    address: addressReducer
})