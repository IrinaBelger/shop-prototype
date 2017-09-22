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
    }
};

export default function  productReducer(state = initialState, action) {
    switch(action.type){
        case 'FETCH_PRODUCTS':
            return { ...state, products: action.payload};
        case 'EDIT_MODEL_NEW_PRODUCT':
            return { ...state, newProduct: {
                model: action.payload,
                description: state.newProduct.description,
                price: state.newProduct.price,
                productTypeId: state.newProduct.productTypeId
            }};
        case 'EDIT_DESCRIPTION_NEW_PRODUCT':
            return { ...state, newProduct: {
                model: state.newProduct.model,
                description: action.payload,
                price: state.newProduct.price,
                productTypeId: state.newProduct.productTypeId
            }};
        case 'EDIT_PRICE_NEW_PRODUCT':
            return { ...state, newProduct: {
                model: state.newProduct.model,
                description: state.newProduct.description,
                price: action.payload,
                productTypeId: state.newProduct.productTypeId
            }};
        case 'EDIT_TYPE_NEW_PRODUCT':
            return { ...state, newProduct: {
                model: state.newProduct.model,
                description: state.newProduct.description,
                price: state.newProduct.price,
                productTypeId: action.payload
            }};
        case 'EDIT_NEW_PRODUCT':
            return { ...state, newProduct: action.payload};
        default:
            return state;
    }

}