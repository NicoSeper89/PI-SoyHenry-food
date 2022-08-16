const { Router } = require('express');
const getRecipeByName = require(`../controllers/getRecipeByName.js`);
const postRecipe = require(`../controllers/postRecipe.js`);


const router = Router();

router.get("/", getRecipeByName);
router.post("/", postRecipe);

module.exports = router; 