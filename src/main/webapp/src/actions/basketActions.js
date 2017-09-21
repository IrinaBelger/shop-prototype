/**
 * Created by Irina Kazantseva on 21.09.2017.
 */

export const addProductToBasket = (product) => dispatch => {
    dispatch({ type: 'ADD_PRODUCT_TO_BASKET', payload: product })
};

export const fetchBasket = () => dispatch => {
     const payload = {};
    dispatch({ type: 'FETCH_BASKET', payload })
};

export const countCost = () => dispatch => {
    const payload = {};
    dispatch({ type: 'COUNT_COST', payload })
};