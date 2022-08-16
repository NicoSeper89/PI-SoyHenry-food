const { Router } = require('express');
const getDiets = require(`../controllers/getDiets.js`)

const router = Router();

router.get("/", getDiets)

module.exports = router; 