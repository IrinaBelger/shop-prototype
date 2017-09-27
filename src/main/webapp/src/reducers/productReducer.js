/**
 * Created by Irina Kazantseva on 21.09.2017.
 */
import * as actionTypes from '../constans/actionTypes'
const initialState = {
    products: [],
    editedProduct: {},
    newProduct:{
        model: '',
        description: '',
        price: '',
        productTypeId: 0
    },
    product: {
        productType:{
            productCategory:{

            }
        }
    }
};

export default function  productReducer(state = initialState, action) {
    switch(action.type){
        case actionTypes.CLEAR_PRODUCTS:
            return { ...state, products: []};
        case actionTypes.FETCH_PRODUCTS:
            return { ...state, products: action.payload};
        case actionTypes.EDIT_NEW_PRODUCT:
            return { ...state, newProduct: action.payload};
        case actionTypes.EDIT_PRODUCT:
            return { ...state, editedProduct: action.payload};
        case actionTypes.SET_PRODUCT:
            return { ...state, product: action.payload};
        case actionTypes.DELETE_PRODUCT:
            return { ...state, products:
                state.products.filter(function(product){
                    return product.id !== action.payload.id;
                })
            };
        default:
            return state;
    }

}