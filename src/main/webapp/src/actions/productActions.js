/**
 * Created by Irina Kazantseva on 21.09.2017.
 */
export const fetchProducts = (products) => dispatch => {
    dispatch({ type: 'FETCH_PRODUCTS', payload: products })
};

export const saveProduct = (product) => dispatch => {
    dispatch({ type: 'SAVE_PRODUCT', payload: product })
};

export const editModelNewProduct = (model) => dispatch => {
    dispatch({ type: 'EDIT_MODEL_NEW_PRODUCT', payload: model })
};

export const editDescriptionNewProduct = (description) => dispatch => {
    dispatch({ type: 'EDIT_DESCRIPTION_NEW_PRODUCT', payload: description })
};

export const editPriceNewProduct = (price) => dispatch => {
    dispatch({ type: 'EDIT_PRICE_NEW_PRODUCT', payload: price })
};

export const editTypeNewProduct = (type) => dispatch => {
    dispatch({ type: 'EDIT_TYPE_NEW_PRODUCT', payload: type})
};

export const editNewProduct = (product) => dispatch => {
    dispatch({ type: 'EDIT_NEW_PRODUCT', payload: product})
};