const express = require('express');
const router = express.Router();

const RecipeFuncs = require('../models/recipeModel.js')


router.get('/', async (req, res) => {
    const recipes = await RecipeFuncs.get();
    try {
        res.status(200).json(recipes)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error retrieving recipes' })
    }
})

router.post('/', async (req, res) => {
    const newRecipe = await RecipeFuncs.add(req.body)

    try {
        res.status(201).json(newRecipe)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error adding recipe' })
    }
})
module.exports = router;