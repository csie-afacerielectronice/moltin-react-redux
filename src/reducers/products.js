import { FETCH_PRODUCTS_END, FETCH_PRODUCTS_START } from "../actions/products";

const initialState = {
    fetching: false,
    fetched: false,
    products: null,
    error: null
};

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PRODUCTS_END:
            return {...state, fetching: false, fetched: true, products: action.payload};

        case FETCH_PRODUCTS_START: 
            return {...state, fetching: true};
            
        default:
            return {...state, fetched: false};
    }
}