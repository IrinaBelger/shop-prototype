/**
 * Created by Irina Kazantseva on 21.09.2017.
 */
const initialState = {
    products: [],
    newProduct:{
        model: '',
        description: '',
        price: '',
        productTypeId: 0
    },
    product: {}
};

export default function  productReducer(state = initialState, action) {
    switch(action.type){
        case 'CLEAR_PRODUCTS':
            return { ...state, products: []};
        case 'FETCH_PRODUCTS':
            return { ...state, products: action.payload};
        case 'EDIT_NEW_PRODUCT':
            return { ...state, newProduct: action.payload};
        case 'SET_PRODUCT':
            return { ...state, product: action.payload};
        case 'DELETE_PRODUCT':
            return { ...state, products:
                state.products.filter(function(product){
                    return product.id !== action.payload.id;
                })
            };
        default:
            return state;
    }

}