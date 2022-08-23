const initialState = {
    loading: true,
    allRecipes: []
}

const rootReducer = (state = initialState, actions) => {

    switch (actions.type) {
        case 'GET_ALL_RECIPES':
            return {
                ...state,
                loading: false,
                allRecipes: actions.payload
            }

        default: return { ...state };
    }
}

export default rootReducer;