/**
 * Created by Irina Kazantseva on 21.09.2017.
 */
const initialState = {
    categories: [],
    categoryList: [],
    types: [],
    type: {},
    category: {}
};

export default function  categoryReduser(state = initialState, action) {
    switch(action.type){
        case 'FETCH_CATEGORIES':
            return { ...state, categories: action.payload};
        case 'GET_CATEGORIES':
            return { ...state, categoryList: action.payload};
        case 'GET_TYPES_BY_CATEGORY_ID':
            return { ...state, types: action.payload};
        case 'SET_TYPE':
            return { ...state, type: action.payload};
        case 'SET_CATEGORY':
            return { ...state, category: action.payload};
        default:
            return state;
    }

}
