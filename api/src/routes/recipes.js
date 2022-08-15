const { Router } = require('express');
const getRecipeByName = require(`../controllers/getRecipeByName.js`)

const router = Router();

router.get("/", getRecipeByName)

module.exports = router; 