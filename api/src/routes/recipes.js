const { Router } = require('express');
const {getRecipeByName, getRecipeById} = require(`../controllers/getRecipe.js`);
const postRecipe = require(`../controllers/postRecipe.js`);

const router = Router();

router.get("/", getRecipeByName);
router.post("/", postRecipe);
router.get("/:id", getRecipeById);

module.exports = router; 