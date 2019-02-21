
exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', function(tbl) {
      tbl.increments();

      
  })
};

exports.down = function(knex, Promise) {
  
};
