const initialState = {
    loading: true,
    allRecipes: [],
    countRecipes: 0,
    allDiets: {},
    page: 1
}

const rootReducer = (state = initialState, actions) => {

    switch (actions.type) {
        case 'GET_ALL_RECIPES':
            return {
                ...state,
                allRecipes: actions.payload,
                countRecipes: actions.payload.length
            }
        case 'GET_ALL_DIETS':
            return {
                ...state,
                loading: false,
                allDiets: actions.payload
            }
        case 'PREVIOUS_PAGE':
            return {
                ...state,
                page: state.page - 1
            }
        case 'CHANGE_PAGE':
            return {
                ...state,
                page: actions.payload
            }
        case 'NEXT_PAGE':
            return {
                ...state,
                page: state.page + 1
            }

        default: return { ...state };
    }
}

export default rootReducer;