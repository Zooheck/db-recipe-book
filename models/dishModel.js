const db = require('../knexfile.js')


module.exports = {
    get,
    getById,
    add
}

function get() {
    return db('dishes')
}

function getById(id) {
    return db('dishes')
        .where({ id })
        .first()
}

function add(dish) {
    return db('dishes')
        .insert(dish)
        .then(ids => {
            return getById(ids[0]);
        })
}