const { Router } = require('express');
const {getRecipeByName, getRecipeById} = require(`../controllers/getRecipe.js`);
const postRecipe = require(`../controllers/postRecipe.js`);
const deleteRecipe = require('../controllers/deleteRecipe.js');

const router = Router();

router.get("/", getRecipeByName);
router.get("/:id", getRecipeById);
router.post("/", postRecipe);
router.delete("/:id", deleteRecipe);

module.exports = router; 