const { Recipe, Diet } = require(`../db.js`);
const { Op } = require("sequelize");

module.exports = async (req, res) => {

    try {

        const { name, image, summary, healthScore, steps, diets } = req.body;

        if (!name || !summary) return res.status(404).send("Creacion Cancelada. Falto Informacion"); 

        const newRecipe = await Recipe.create({name,
                                               image,
                                               summary,
                                               healthScore,
                                               steps
                                            });

        const dietsToAdd = await Diet.findAll({ where:{ 
                            name:{
                                [Op.in]: diets? diets : []
                                }
                            }
                        });

        await newRecipe.addDiets(dietsToAdd); 

        return res.json(newRecipe);

    } catch (err) {

        return res.status(404).json(err);

    }


}