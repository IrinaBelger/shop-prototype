/**
 * Created by Irina Kazantseva on 21.09.2017.
 */
import * as actionTypes from '../constans/actionTypes'
const initialState = {
    items: [],
    cost: 0
};

export default function basketReducer(state = initialState, action) {
    let currentCost = 0;
    switch (action.type) {
        case actionTypes.ADD_PRODUCT_TO_BASKET:
            return {...state, items: [...state.items, action.payload]};
        case actionTypes.FETCH_BASKET:
            return {...state, items: state.items};
        case actionTypes.COUNT_COST:
            currentCost = 0;
            for (let i = 0; i < state.items.length; i++) {
                currentCost += state.items[i].price;
            }
            return {...state, cost: currentCost};
        case actionTypes.DELETE_PRODUCT_FROM_BASKET:
            currentCost = 0;
            for (let i = 0; i < state.items.length; i++) {
                currentCost += state.items[i].id !== action.payload.id ? state.items[i].price : 0;
            }
            return {
                ...state, items: state.items.filter(function (product) {
                    return product.id !== action.payload.id;
                }),
                cost: currentCost
            };
        case actionTypes.UPDATE_PRODUCT_FROM_BASKET:
            currentCost = 0;
            for (let i = 0; i < state.items.length; i++) {
                currentCost += state.items[i].id !== action.payload.id ? state.items[i].price : action.payload.price;
            }
            return {
                ...state, items: state.items.map(function (product) {
                    return product.id !== action.payload.id ? product : action.payload;
                }),
                cost: currentCost
            };
        case actionTypes.SAVE_PRODUCT:
            if(Object.keys(state.active_type).length > 0 && state.active_type.id === action.payload.productTypeId){
                return { ...state, products: [...state.products, action.payload]};
            }
            return state;
        default:
            return state;
    }

}
