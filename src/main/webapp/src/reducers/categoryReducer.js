/**
 * Created by Irina Kazantseva on 21.09.2017.
 */
import * as actionTypes from '../constans/actionTypes'
const initialState = {
    categories: [],
    categoryList: [],
    types: [],
    type: {},
    category: {},
    active_type: {},
    active_category: {}
};

export default function  categoryReduser(state = initialState, action) {
    switch(action.type){
        case actionTypes.FETCH_CATEGORIES:
            return { ...state, categories: action.payload};
        case actionTypes.CREATE_CATEGORY:
            return { ...state, categoryList: [...state.categoryList,action.payload]};
        case actionTypes.GET_CATEGORIES:
            return { ...state, categoryList: action.payload};
        case actionTypes.GET_TYPES_BY_CATEGORY_ID:
            return { ...state, types: action.payload};
        case actionTypes.SET_TYPE:
            return { ...state, type: action.payload};
        case actionTypes.SET_CATEGORY:
            return { ...state, category: action.payload};
        case actionTypes.SET_ACTIVE_TYPE:
            return { ...state, active_type: {id: action.payload} };
        case actionTypes.CLEAR_ACTIVE_TYPE:
            return { ...state, active_type: {}};
        case actionTypes.DELETE_ACTIVE_TYPE:
            return { ...state, active_type: {}};
        case actionTypes.SET_ACTIVE_CATEGORY:
            return { ...state,  active_category: action.payload, active_type:{}};
        case actionTypes.DELETE_ACTIVE_CATEGORY:
            return { ...state,  active_category: {}, active_type: {}};
        case actionTypes.EDIT_ACTIVE_CATEGORY:
            return { ...state,  active_category: action.payload, active_type:{}};
        case actionTypes.EDIT_ACTIVE_TYPE:
            return { ...state,  active_category: {}, active_type: {id: action.payload}};
        default:
            return state;
    }

}
