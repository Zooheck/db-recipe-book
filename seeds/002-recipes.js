
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          id: 1,
          name: 'Tex Tacos',
          dish_id: 2,
          instructions: 'Testing instruction'
        },
        {
          id: 2,
          name: 'Cheese Pizza',
          dish_id: 1,
          instructions: 'Testing instruction'
        },
        {
          id: 3,
          name: 'Baked Salmon',
          dish_id: 3,
          instructions: 'Testing instruction'
        },
        {
          id: 4,
          name: 'Seattle Tacos',
          dish_id: 2,
          instructions: 'Testing instruction'
        },
        {
          id: 5,
          name: 'Pepperoni Pizza',
          dish_id: 1,
          instructions: 'Testing instruction'
        },
        {
          id: 6,
          name: 'Pan Fried Salmon',
          dish_id: 3,
          instructions: 'Testing instruction'
        }
      ]);
    });
};
