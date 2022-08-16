const { Recipe, Diet } = require(`../db.js`)

module.exports = async (req, res) => {

    try {

        const { name, diets, image, summary, steps, healthScore } = req.body;

        const newRecipe = Recipe.create({name, 
                                         summary,
                                         healthScore,
                                         image,
                                         steps
                                         })

        return res.send("asdas")

    } catch (err) {

        return res.json(err)

    }


}