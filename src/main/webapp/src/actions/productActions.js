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

export const setProduct = (product) => dispatch => {
    dispatch({ type: 'SET_PRODUCT', payload: product})
};

export const deleteProduct = (product) => dispatch => {
    dispatch({ type: 'DELETE_PRODUCT', payload: product})
};