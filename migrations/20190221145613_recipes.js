
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(tbl) {
      tbl.increments();
      tbl
        .integer('dish_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('dishes')
        .onDelete('NO ACTION')
        .onUpdate('CASCADE')

      tbl.string('name', 128).notNullable().unique();

    tbl
        .integer('quantity')
        .unsigned()
        .notNullable()
    tbl
        .text('instructions')
        .notNullable()
      tbl.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  
};
