const initialState = {
    loading: true,
    allRecipes: [],
    countRecipes: 0,
    page: 1
}

const rootReducer = (state = initialState, actions) => {

    switch (actions.type) {
        case 'GET_ALL_RECIPES':
            return {
                ...state,
                loading: false,
                allRecipes: actions.payload,
                countRecipes: actions.payload.length
            }

        default: return { ...state };
    }
}

export default rootReducer;