/**
 * Created by Irina Kazantseva on 21.09.2017.
 */
import * as actionTypes from '../constans/actionTypes';
import axios from 'axios';

export const addProductToBasket = (product) => dispatch => {
    dispatch({ type: actionTypes.ADD_PRODUCT_TO_BASKET, payload: product })
};

export const fetchBasket = () => dispatch => {
     const payload = {};
    dispatch({ type: actionTypes.FETCH_BASKET, payload })
};

export const countCost = () => dispatch => {
    const payload = {};
    dispatch({ type: actionTypes.COUNT_COST, payload })
};

export const deleteProductFromBasket = (id, product) => dispatch => {
    axios.get('http://localhost:8080/product/getProductStatus/'+id,
        {headers: {"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}}).then(response => {
        if(response.data){
            dispatch({ type: actionTypes.DELETE_PRODUCT_FROM_BASKET, payload: product })
        }
    });
};

export const updateProductFromBasket = (product) => dispatch => {
    dispatch({ type: actionTypes.UPDATE_PRODUCT_FROM_BASKET, payload: product })
};
