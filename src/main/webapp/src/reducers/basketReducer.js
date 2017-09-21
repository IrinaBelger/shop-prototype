/**
 * Created by Irina Kazantseva on 21.09.2017.
 */
const initialState = {
    items: [],
    cost: 0
};

export default function  basketReducer(state = initialState, action) {
    switch(action.type){
        case 'ADD_PRODUCT_TO_BASKET':
            return { ...state, items: [...state.items,action.payload]};
        case 'FETCH_BASKET':
            return { ...state, items: state.items};
        case 'COUNT_COST':
            let currentCost=0;
            for(let i=0; i<state.items.length; i++){
                currentCost+=state.items[i].price;
            }
            return { ...state, cost: currentCost};
        default:
            return state;
    }

}
