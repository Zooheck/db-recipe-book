
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('groceryList').del()
    .then(function () {
      // Inserts seed entries
      return knex('groceryList').insert([
        {recipe_id: 1, ingredient_id: 2, quantity: 1.25},
        {recipe_id: 1, ingredient_id: 1, quantity: 1.25},
        {recipe_id: 1, ingredient_id: 8, quantity: 1.25},
        {recipe_id: 1, ingredient_id: 9, quantity: 1.25},
        {recipe_id: 2, ingredient_id: 1, quantity: 1.25},
        {recipe_id: 2, ingredient_id: 3, quantity: 1.25},
        {recipe_id: 2, ingredient_id: 6, quantity: 1.25},
        {recipe_id: 2, ingredient_id: 9, quantity: 1.25},
        {recipe_id: 3, ingredient_id: 4, quantity: 1.25},
        {recipe_id: 3, ingredient_id: 2, quantity: 1.25},
        {recipe_id: 6, ingredient_id: 4, quantity: 1.25},
        {recipe_id: 6, ingredient_id: 2, quantity: 1.25},
        {recipe_id: 5, ingredient_id: 3, quantity: 1.25},
        {recipe_id: 4, ingredient_id: 5, quantity: 1.25},
        {recipe_id: 4, ingredient_id: 4, quantity: 1.25}
      ]);
    });
};
