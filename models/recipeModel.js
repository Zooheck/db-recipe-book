const db = require('../dbConfig.js')

module.exports = {
    get,
    // getById,
    // add
}

function get() {
    return db('recipes')
        .select('recipes.name as recipeName', 'recipes.instructions', 'recipes.dish_id', 'dishes.name as dishType', 'dishes.id')
        .join('dishes', {'dishes.id': 'recipes.dish_id'})
}
// function get() {
//     return db('recipes')
// }

// .join('dishes')
// .where('recipes.dish_id', '=', 'dishes.id')
// .first()