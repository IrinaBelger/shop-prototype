/**
 * Created by Irina Kazantseva on 21.09.2017.
 */

export const fetchCategories = (categories) => dispatch => {
    dispatch({ type: 'FETCH_CATEGORIES', payload: categories })
};
export const getCategories = (categoryList) => dispatch => {
    dispatch({ type: 'GET_CATEGORIES', payload: categoryList })
};
export const getTypesByCategoryId = (types) => dispatch => {
    dispatch({ type: 'GET_TYPES_BY_CATEGORY_ID', payload: types })
};
export const setType = (type) => dispatch => {
    dispatch({ type: 'SET_TYPE', payload: type })
};
export const setCategory = (category) => dispatch => {
    dispatch({ type: 'SET_CATEGORY', payload: category })
};