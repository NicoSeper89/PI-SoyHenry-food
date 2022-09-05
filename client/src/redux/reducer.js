const initialState = {
    loading: true,
    backupRecipes: [],
    allRecipes: [],
    countRecipes: 0,
    allDiets: {},
    page: 1,
    newRecipeCreate: false
}

const rootReducer = (state = initialState, actions) => {

    switch (actions.type) {
        case 'GET_ALL_RECIPES':
            return {
                ...state,
                backupRecipes: [...actions.payload],
                allRecipes: actions.payload,
                countRecipes: actions.payload.length,
                page: 1,
                newRecipeCreate: false
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

            const { typeOrder, asc, atribute } = actions.payload;

            let newOrder = []

            if (typeOrder === "string") {

                newOrder = asc ? [...state.allRecipes.sort((a, b) => (a[atribute].toLowerCase() > b[atribute].toLowerCase()) ? 1 :
                    (a[atribute].toLowerCase() < b[atribute].toLowerCase()) ? -1 : 0)] :

                    [...state.allRecipes.sort((b, a) => (a[atribute].toLowerCase() > b[atribute].toLowerCase()) ? 1 :
                        (a[atribute].toLowerCase() < b[atribute].toLowerCase()) ? -1 : 0)]
            } else {

                newOrder = asc ? [...state.allRecipes.sort((a, b) => (a[atribute] > b[atribute]) ? 1 :
                    (a[atribute] < b[atribute]) ? -1 : 0)] :

                    [...state.allRecipes.sort((b, a) => (a[atribute] > b[atribute]) ? 1 :
                        (a[atribute] < b[atribute]) ? -1 : 0)]
            }

            return {
                ...state,
                allRecipes: newOrder,
                page: 1
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
                loading: actions.payload
            }

        case 'SAVE_RECIPES':

            return {
                ...state,
                allRecipes: actions.payload,
                countRecipes: actions.payload.length,
                page: 1
            }

        case 'NEW_RECIPE':

            return {
                ...state,
                newRecipeCreate: true
            }

        default: return { ...state };
    }
}

export default rootReducer;