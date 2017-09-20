const initialCategoriesState = {
    categories: [],
    isLoading: false,
    errors: {}
}

export default function categoriesReduser(state = initialCategoriesState, action) {
    switch(action.type) {
        case 'CATEGORIES_ERROR':
            return Object.assign({}, state, {
                isLoading: false,
                categories: action.categories
            });
        case 'CATEGORIES_SUCCESS':
            return Object.assign({}, state, {
                isLoading: false,
                categories: action.categories
            })
    }
    return state;
}