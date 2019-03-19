export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START'
export const FETCH_PRODUCTS_END = 'FETCH_PRODUCTS_END'

export const fetchProductsStart = () => {
    return {
        type: FETCH_PRODUCTS_START
    }
}

export const fetchProductEnd = (data) => {
    return {
        type: FETCH_PRODUCTS_END,
        payload: data
    }
}

export const getProducts = () => (dispatch, getState, gateway) => {
    dispatch(fetchProductsStart());

    return gateway.Products.With('main_images').All().then(products => dispatch(fetchProductEnd(products)));
}