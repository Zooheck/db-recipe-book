const db = require('../dbConfig.js')

module.exports = {
    get,
    getById,
    add
}

function get() {
    return db('recipes')
        .select('recipes.name as recipeName', 'recipes.instructions', 'recipes.dish_id', 'dishes.name as dishType', 'dishes.id')
        .join('dishes', {'dishes.id': 'recipes.dish_id'})
}

function getById(id) {
    return db('recipes')
        .where({ id })
        .first()
}
function add(recipe) {
    return db('recipes')
    .insert(recipe)
    .then(ids => {
        return getById(ids[0]);
    })
}
// function get() {
//     return db('recipes')
// }

// .join('dishes')
// .where('recipes.dish_id', '=', 'dishes.id')
// .first()