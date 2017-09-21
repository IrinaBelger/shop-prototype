/**
 * Created by Irina Kazantseva on 21.09.2017.
 */
const initialState = {
    products: []
};

export default function  productReducer(state = initialState, action) {
    switch(action.type){
        case 'FETCH_PRODUCTS':
            return { ...state, products: action.payload}
        default:
            return state;
    }

}