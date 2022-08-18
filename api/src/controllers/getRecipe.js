require('dotenv').config();
const { API_KEY } = process.env;
const fetch = require('node-fetch');
const { Recipe, Diet } = require(`../db.js`);
const { Op } = require("sequelize");


const reduceObjectsRecipes = (r) => {
    return {
        id: r.id,
        name: r.title,
        image: r.image,
        summary: r.summary,
        healthScore: r.healthScore,
        steps: r.analyzedInstructions[0] ? r.analyzedInstructions[0].steps.reduce((obj, s) => {
                obj[s.number] = s.step
                return obj
            }, {}) :
            {},
        diets: r.diets
    }
}

const modifyDietAttributes = (r) => {
    r = r.toJSON();
    r.diets = r.diets.map(diet => diet.name);
    return r;
}

const getRecipeByName = async (req, res) => {

    try {

        const { name } = req.query

        if (!name) throw new Error("Error: falto parametro"); //Error si la solicitud no tiene la query "name"

        // Busca 100 recetas en la API 
        const { results } = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
            .then(response => response.json());

        //Filtra las recetas a solo las que tengan el valor de la query "name" incluida en su titulo       
        let recipesApi = results.filter(recipe => recipe.title.toLowerCase().includes(name));

        //Objeto de cada receta solo con las propiedades necesarias
        recipesApi = recipesApi.map((recipe) => reduceObjectsRecipes(recipe))

        let recipesDB = await Recipe.findAll({
            where: { name: {
                    [Op.substring]: name } },
            include: {
                model: Diet,
                as: "diets",
                attributes: ["name"],
                through: { attributes: [] }
            }
        })

        recipesDB = recipesDB.map(recipe => modifyDietAttributes(recipe));

        const recipesAll = recipesApi.concat(recipesDB);

        return (recipesAll.length) ? res.json(recipesAll) : res.send(`No se encontro ninguna recetea con la palabra ${name} en su nombre`);

    } catch (err) {

        return res.status(404).json(err)

    }
}

const getRecipeById = async (req, res) => {

    const { id } = req.params;

    console.log(typeof id)

    try {

        if (id === undefined) return res.send("no hay ID");

        if (!id.includes("-")) {

            const recipeApi = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
                                 .then(response => response.json());

            return res.json(reduceObjectsRecipes(recipeApi));

        } else {

            let recipeDB = await Recipe.findByPk(id,{
                                                    include: {
                                                        model: Diet,
                                                        as: "diets",
                                                        attributes: ["name"],
                                                        through: { attributes: [] }
                                                    }
                                                });
            return res.json(modifyDietAttributes(recipeDB))
        }

    } catch (err) {
        return res.status(404).json(err)
    }
}

module.exports = {
    getRecipeByName,
    getRecipeById
}