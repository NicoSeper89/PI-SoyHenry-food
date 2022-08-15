require('dotenv').config();
const fetch = require('node-fetch');
const {API_KEY} = process.env;

module.exports = async (req, res) => {

    // const { name } = req.query

    // const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=1`)
    //                     .then(response => response.json());

    // return res.json(data);
}