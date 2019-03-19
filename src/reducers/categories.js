import { FETCH_CATEGORIES_END, FETCH_CATEGORIES_START } from "../actions/categories";

const initialState = {
    fetching: false,
    fetched: false,
    categories: null,
    error: null
};

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CATEGORIES_END:
            return {...state, fetching: false, fetched: true, categories: action.payload};
        
        case FETCH_CATEGORIES_START: 
            return {...state, fetching: true};
        
        default:
            return {...state, fetched: false};
    }
}