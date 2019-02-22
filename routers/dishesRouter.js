const express = require('express');
const router = express.Router();

const DishFuncs = require('../models/dishModel.js')

router.get('/', async (req, res) => {
    const dishes = await DishFuncs.get();
    try {
        res.status(200).json(dishes)
    }
    catch(err) {
        console.log(err)
        res.status(500).json({message: 'Error retrieving dishes'})
    }
})

router.get('/:id', async (req, res) => {
    const dish = await DishFuncs.getById(req.params.id)
    try {
        if(dish) {
            res.status(200).json(dish)
        } else {
            res.status(404).json({message: 'Dish not found'})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Error retrieving dish'})
    }
})

module.exports = router;