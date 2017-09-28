/**
 * Created by Irina Kazantseva on 21.09.2017.
 */

import * as actionTypes from '../constans/actionTypes'
import {updateProductFromBasket} from "./basketActions"
import axios from 'axios';

export const fetchProducts = (id) => dispatch => {
    axios.get('http://localhost:8080/product/' + id,
        {headers: {"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}}).then(response => {
        dispatch({type: actionTypes.FETCH_PRODUCTS, payload: response.data})
    });
};

export const saveProduct = (product) => dispatch => {
    axios({
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        url: 'http://localhost:8080/product',
        data: product}).then(response => {
            dispatch({type: actionTypes.SAVE_PRODUCT, payload: response.data})
        })

};

export const editNewProduct = (product) => dispatch => {
    dispatch({type: actionTypes.EDIT_NEW_PRODUCT, payload: product})
};

export const editProduct = (product_id, product,editedProduct) => dispatch => {
    axios({
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        url: 'http://localhost:8080/product/' + product_id,
        data: product
    }).then(response => {
        dispatch({type: actionTypes.EDIT_PRODUCT, payload: response.data});
        dispatch(updateProductFromBasket(editedProduct));
        dispatch(setProduct(editedProduct));
    })
};

export const setProduct = (productId) => dispatch => {
    axios.get('http://localhost:8080/product/getById/' + productId,
        {headers: {"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}}).then(response => {
        dispatch({type: actionTypes.SET_PRODUCT, payload: response.data})
    });
};

export const deleteProduct = (productId, productCopy) => dispatch => {
    axios.delete('http://localhost:8080/product/' + productId,
        {headers: {"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}}).then(response => {
        dispatch({type: actionTypes.DELETE_PRODUCT, payload: productCopy})
    });
};

export const clearProducts = (product) => dispatch => {
    dispatch({type: actionTypes.CLEAR_PRODUCTS, payload: product})
};