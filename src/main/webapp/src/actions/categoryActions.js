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
export const setActiveType = (active_type) => dispatch => {
    dispatch({ type: 'SET_ACTIVE_TYPE', payload: active_type })
};
export const setActiveCategory = (active_category) => dispatch => {
    dispatch({ type: 'SET_ACTIVE_CATEGORY', payload: active_category })
};
export const deleteActiveCategory = (active_category) => dispatch => {
    dispatch({ type: 'DELETE_ACTIVE_CATEGORY', payload: active_category })
};
export const deleteActiveType = (active_type) => dispatch => {
    dispatch({ type: 'DELETE_ACTIVE_TYPE', payload: active_type })
};
export const editActiveCategory = (active_category) => dispatch => {
    dispatch({ type: 'EDIT_ACTIVE_CATEGORY', payload: active_category })
};
export const editActiveType = (active_type) => dispatch => {
    dispatch({ type: 'EDIT_ACTIVE_TYPE', payload: active_type })
};
export const clearActiveType = (active_type) => dispatch => {
    dispatch({ type: 'CLEAR_ACTIVE_TYPE', payload: active_type })
};