const db = require('../dbConfig.js')


module.exports = {
    get,
    getById,
    add
}

function get() {
    return db('dishes')
}

// function getById(id) {
//     return db('dishes')
//         .where({ id })

//         .first()
// }
// select dishes.name as dishName, ingredients.name as ingredient from dishes
// join groceryList on groceryList.recipe_id = dishes.id
// join ingredients on groceryList.ingredient_id = ingredients.id
// where dishes.id = 1
function getById(id) {
    return db('dishes')
        .select('dishes.name as dishName', 'ingredients.name as ingredient')
        // .select('ingredients.name as ingredient')
        .join('groceryList', 'groceryList.recipe_id', '=', 'dishes.id')
        .join('ingredients', 'groceryList.ingredient_id', '=', 'ingredients.id')
        .where('dishes.id', '=', `${id}`)

}

function add(dish) {
    return db('dishes')
        .insert(dish)
        .then(ids => {
            return getById(ids[0]);
        })
}