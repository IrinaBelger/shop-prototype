import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer'
import productReducer from './productReducer'
import basketReducer from './basketReducer'

export default combineReducers({
    categoryReducer, productReducer, basketReducer
})
