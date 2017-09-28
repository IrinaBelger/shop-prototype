/**
 * Created by Irina Kazantseva on 21.09.2017.
 */
import * as actionTypes from '../constans/actionTypes'
import axios from 'axios';


export const fetchCategories = () => dispatch => {
    axios.get('http://localhost:8080/product-category/map',
        {headers: {"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}}).then(response => {
        dispatch({ type: actionTypes.FETCH_CATEGORIES, payload: response.data })
    });
};
export const createCategory = (category) => dispatch => {
    axios({
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        url: 'http://localhost:8080/product-category',
        data: category
    }).then(response => {
            dispatch({ type: actionTypes.CREATE_CATEGORY, payload: response.data });
            dispatch(fetchCategories());
        }).catch(function (error) {
            console.log(error);
        });
};
export const getCategories = () => dispatch => {
    axios.get('http://localhost:8080/product-category',
        {headers: {"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}}).then(response => {
        dispatch({ type: actionTypes.GET_CATEGORIES, payload: response.data })
    });
};
export const getTypesByCategoryId = (category) => dispatch => {
    axios.get('http://localhost:8080/product-type/' + category,
        {headers: {"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}}).then(response => {
        dispatch({ type: actionTypes.GET_TYPES_BY_CATEGORY_ID, payload: response.data })
    });

};
export const setType = (type) => dispatch => {
    dispatch({ type: actionTypes.SET_TYPE, payload: type })
};
export const setCategory = (category) => dispatch => {
    dispatch({ type: actionTypes.SET_CATEGORY, payload: category });
    dispatch(getTypesByCategoryId(category.id));
};
export const setActiveType = (active_type) => dispatch => {
    dispatch({ type: actionTypes.SET_ACTIVE_TYPE, payload: active_type })
};
export const setActiveCategory = (active_category) => dispatch => {
    dispatch({ type: actionTypes.SET_ACTIVE_CATEGORY, payload: active_category })
};
export const deleteActiveCategory = (active_category_id, active_category) => dispatch => {
    axios.delete('http://localhost:8080/product-category/' + active_category_id,
        {headers: {"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}}).then(response => {
        dispatch({ type: actionTypes.DELETE_ACTIVE_CATEGORY, payload: active_category });
        dispatch(fetchCategories())
    });

};
export const deleteActiveType = (active_type_id, active_type) => dispatch => {
    axios.delete('http://localhost:8080/product-type/' + active_type_id,
        {headers: {"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}}).then(response => {
        dispatch({ type: actionTypes.DELETE_ACTIVE_TYPE, payload: active_type });
        dispatch(fetchCategories());
    });

};
export const editActiveCategory = (active_category_id, active_category_name) => dispatch => {
    axios({
        method: 'put',
        headers: {"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept", 'Content-Type': 'application/json'},
        url: 'http://localhost:8080/product-category',
        data: {
            id: active_category_id,
            name: active_category_name
        }
    }).then(response => {
        dispatch({ type: actionTypes.EDIT_ACTIVE_CATEGORY, payload: {
            id: active_category_id,
            name: active_category_name
        }});
        dispatch(fetchCategories());
        dispatch(getCategories());
    }).catch(function (error) {
            console.log(error);
        });

};
export const editActiveType = (active_type_id, active_type_name) => dispatch => {
    axios({
        method: 'put',
        headers: {"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept", 'Content-Type': 'application/json'},
        url: 'http://localhost:8080/product-type',
        data: {
            id: active_type_id,
            name: active_type_name
        }

    }).then(response => {
        dispatch({ type: actionTypes.EDIT_ACTIVE_TYPE, payload: {
            id: active_type_id,
            name: active_type_name
        }});
        dispatch(fetchCategories());
    })
    .catch(function (error) {
        console.log(error);
    });

};
export const clearActiveType = (active_type) => dispatch => {
    dispatch({ type: actionTypes.CLEAR_ACTIVE_TYPE, payload: active_type })
};