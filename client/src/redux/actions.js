import fetch from 'node-fetch';

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

export function getRecipesBackend() {
    return (dispatch) => {dispatch(loading(true));
        fetch('http://localhost:3001/recipes')
        .then(response => response.json()) 
        .then(data => {dispatch(getAllRecipes(data));
                       dispatch(getDietsBackend())})   
        .catch(err => {dispatch(getAllRecipes([]));
                       dispatch(getDietsBackend())} 
            ); 
    }
}

export function getDietsBackend() {
    return (dispatch) => {
        fetch('http://localhost:3001/diets')
        .then(response => response.json()) 
        .then(data => dispatch(getAllDiets(data)))   
        .catch(err => console.log('Solicitud de dietas al servidor fallida', err)); 
    }
}

export function getRecipesByName(name) {
    return (dispatch) => {dispatch(loading(true));
        fetch(`http://localhost:3001/recipes?name=${name}`)
        .then(response => response.json()) 
        .then(data => {dispatch(saveRecipes(data)); dispatch(loading(false))})   
        .catch(err => console.log('Solicitud de recetas por nombre al servidor fallida', err)); 
    }
}