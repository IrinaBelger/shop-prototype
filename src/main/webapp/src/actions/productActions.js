/**
 * Created by Irina Kazantseva on 21.09.2017.
 */
export const fetchProducts = (products) => dispatch => {
    dispatch({ type: 'FETCH_PRODUCTS', payload: products })
};

export const saveProduct = (product) => dispatch => {
    dispatch({ type: 'SAVE_PRODUCT', payload: product })
};

export const editNewProduct = (product) => dispatch => {
    dispatch({ type: 'EDIT_NEW_PRODUCT', payload: product})
};