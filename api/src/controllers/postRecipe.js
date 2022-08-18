const { Recipe, Diet } = require(`../db.js`);
const { Op } = require("sequelize");

module.exports = async (req, res) => {

    try {

        const { name, image, summary, healthScore, steps, diets } = req.body;

        const newRecipe = await Recipe.create({name,
                                               image,
                                               summary,
                                               healthScore,
                                               steps
                                            });

        const dietsToAdd = await Diet.findAll({ where:{ 
                            name:{
                                [Op.in]: diets
                                }
                            }
                        });

        await newRecipe.addDiets(dietsToAdd); 

        return res.send(newRecipe);

    } catch (err) {

        return res.json(err);

    }


}