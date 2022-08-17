require('dotenv').config();
const fetch = require('node-fetch');
const { API_KEY } = process.env;

const reduceObjectsRecipes = (r) => {
    return {
        id: r.id,
        name: r.title,
        diets: r.diets,
        image: r.image,
        summary: r.summary,
        steps: r.analyzedInstructions[0]? r.analyzedInstructions[0].steps.reduce((obj, s) => {obj[s.number] = s.step
                                                                                              return obj}, {}) 
                                        : {},
        healthScore: r.healthScore
    }
}

module.exports = async (req, res) => {

    try {

        const { name } = req.query

        if (!name) throw new Error("Error: falto parametro");

        const { results } = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
                                  .then(response => response.json());

        let recipeFiltering = results.filter(recipe => recipe.title.toLowerCase().includes(name));

        recipeFiltering = recipeFiltering.map((recipe) => reduceObjectsRecipes(recipe))

        if (recipeFiltering.length) return res.json(recipeFiltering)
        else throw new Error(`No se encontro ninguna recetea con un nombre que contenga la palabra ${name}`);

    } catch (err) {

        return res.status(404).json(err.message)

    }
}