export const FETCH_CATEGORIES_START = 'FETCH_CATEGORIES_START'
export const FETCH_CATEGORIES_END = 'FETCH_CATEGORIES_END' 

export const fetchCategoriesStart = () => {
    return {
        type: FETCH_CATEGORIES_START
    }
}

export const fetchCategoriesEnd = (data) => {
    return {
        type: FETCH_CATEGORIES_END,
        payload: data
    }
}

export const getCategories = () => (dispatch, getState, gateway) => {
    dispatch(fetchCategoriesStart());

    return gateway.Categories.All().then(categories => dispatch(fetchCategoriesEnd(categories)));
}