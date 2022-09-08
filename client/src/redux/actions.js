import axios from 'axios';

export function getAllRecipes(recipes) {
    return {
        type: "GET_ALL_RECIPES",
        payload: recipes
    }
}

export function getAllDiets(diets) {
    return {
        type: "GET_ALL_DIETS",
        payload: diets
    }
}

export function previousPage() {
    return {
        type: "PREVIOUS_PAGE"
    }
}

export function changePage(n) {
    return {
        type: "CHANGE_PAGE",
        payload: n
    }
}

export function nextPage() {
    return {
        type: "NEXT_PAGE"
    }
}

export function order(info) {
    return {
        type: "ORDER",
        payload: info
    }
}
export function filterByDiets(arrDiets) {
    return {
        type: "FILTER_BY_DIETS",
        payload: arrDiets
    }
}
export function resetRecipes() {
    return {
        type: "RESET_RECIPES"
    }
}
export function loading(on) {
    return {
        type: "LOADING",
        payload: on
    }
}

export function saveRecipes(recipes) {
    return {
        type: "SAVE_RECIPES",
        payload: recipes
    }
}

export function newRecipe() {
    return {
        type: "NEW_RECIPE"
    }
}

export function getRecipesBackend() {
    return (dispatch) => {dispatch(loading(true));
        axios.get('/recipes')
        .then(response => {dispatch(getAllRecipes(response.data));
                       dispatch(getDietsBackend())})   
        .catch(err => {window.alert("ocurrio un error al cargar las recetas, recargue la pagina por favor");
                       dispatch(getDietsBackend())} 
            ); 
    }
}

export function getDietsBackend() {
    return (dispatch) => {
        axios.get('/diets')
        .then(response => dispatch(getAllDiets(response.data)))   
        .catch(err => console.log('Solicitud de dietas al servidor fallida', err)); 
    }
}

export function getRecipesByName(name) {
    
    return (dispatch) => {dispatch(loading(true));
        axios.get(`/recipes?name=${name}`)
        .then(response => {dispatch(saveRecipes(response.data)); dispatch(loading(false))})   
        .catch(err => console.log('Solicitud de recetas por nombre al servidor fallida', err)); 
    }
}