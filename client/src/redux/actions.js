import fetch from 'node-fetch';

export function getAllRecipes(recipes) {
    return {
        type: "GET_ALL_RECIPES",
        payload: recipes
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

export function callToBackend() {
    return (dispatch) => {
        fetch('http://localhost:3001/recipes')
        .then(response => response.json()) 
        .then(data => dispatch(getAllRecipes(data)))   
        .catch(err => console.log('Solicitud fallida', err)); 
    }
}