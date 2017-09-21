/**
 * Created by Irina Kazantseva on 21.09.2017.
 */
export const fetchProducts = (products) => dispatch => {
    dispatch({ type: 'FETCH_PRODUCTS', payload: products })
};