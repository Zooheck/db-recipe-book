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



module.exports = router;