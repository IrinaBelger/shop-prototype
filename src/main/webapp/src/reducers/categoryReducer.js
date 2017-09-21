/**
 * Created by Irina Kazantseva on 21.09.2017.
 */
const initialState = {
    categories: []
};

export default function  categoryReduser(state = initialState, action) {
    switch(action.type){
        case 'FETCH_CATEGORIES':
            return { ...state, categories: action.payload}
        default:
            return state;
    }

}
