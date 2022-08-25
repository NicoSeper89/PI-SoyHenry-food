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
        case 'ORDER': 

            const {typeOrder, asc} = actions.payload;    

            return {
                ...state,
                allRecipes: asc? state.allRecipes.sort((a, b) => (a[typeOrder] > b[typeOrder]) ? 1 : (a[typeOrder] < b[typeOrder]) ? -1 : 0).slice(): 
                                 state.allRecipes.sort((b, a) => (a[typeOrder] > b[typeOrder]) ? 1 : (a[typeOrder] < b[typeOrder]) ? -1 : 0).slice(),
                page: 1
            }

        default: return { ...state };
    }
}

export default rootReducer;