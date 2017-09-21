/**
 * Created by Irina Kazantseva on 21.09.2017.
 */

export const fetchCategories = (categories) => dispatch => {
    dispatch({ type: 'FETCH_CATEGORIES', payload: categories })
};