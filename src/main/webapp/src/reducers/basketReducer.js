/**
 * Created by Irina Kazantseva on 21.09.2017.
 */
const initialState = {
    items: [],
    cost: 0
};

export default function basketReducer(state = initialState, action) {
    let currentCost = 0;
    switch (action.type) {
        case 'ADD_PRODUCT_TO_BASKET':
            return {...state, items: [...state.items, action.payload]};
        case 'FETCH_BASKET':
            return {...state, items: state.items};
        case 'COUNT_COST':
            currentCost = 0;
            for (let i = 0; i < state.items.length; i++) {
                currentCost += state.items[i].price;
            }
            return {...state, cost: currentCost};
        case 'DELETE_PRODUCT_FROM_BASKET':
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
        case 'UPDATE_PRODUCT_FROM_BASKET':
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
        default:
            return state;
    }

}
