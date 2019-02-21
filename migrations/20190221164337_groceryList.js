
exports.up = function(knex, Promise) {
    return knex.schema.createTable('groceryList', function(tbl) {
        tbl
            .integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onDelete('NO ACTION')
            .onUpdate('CASCADE')
        tbl
            .integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onDelete('NO ACTION')
            .onUpdate('CASCADE')
        tbl
            .float('quantity', 2)
            .unsigned()
            .notNullable()
        })
        tbl.timestamps(true, true)
};

exports.down = function(knex, Promise) {
  
};
