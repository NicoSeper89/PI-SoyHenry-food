const initialState = {
    loading: true,
    backupRecipes: [],
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
                backupRecipes: [...actions.payload],
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
        case 'ORDER':

            const { typeOrder, asc } = actions.payload;

            return {
                ...state,
                allRecipes: asc ? state.allRecipes.sort((a, b) => (a[typeOrder] > b[typeOrder]) ? 1 : (a[typeOrder] < b[typeOrder]) ? -1 : 0).slice() :
                    state.allRecipes.sort((b, a) => (a[typeOrder] > b[typeOrder]) ? 1 : (a[typeOrder] < b[typeOrder]) ? -1 : 0).slice()
            }

        case 'FILTER_BY_DIETS':

            const filteredRecipes = state.backupRecipes.filter(recipe => !actions.payload.some(d => !recipe.diets.includes(d)))

            return {
                ...state,
                allRecipes: filteredRecipes,
                countRecipes: filteredRecipes.length,
                page: 1
            }

        case 'RESET_RECIPES':

            return {
                ...state,
                allRecipes: [...state.backupRecipes],
                countRecipes: [...state.backupRecipes].length,
                page: 1
            }
        case 'LOADING':

            return {
                ...state,
                loading: true
            }
        case 'SAVE_RECIPES':

            return {
                ...state,
                allRecipes: actions.payload,
                countRecipes: actions.payload.length,
                page: 1
            }

        default: return { ...state };
    }
}

export default rootReducer;