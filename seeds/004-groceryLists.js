
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('groceryLists').del()
    .then(function () {
      // Inserts seed entries
      return knex('groceryLists').insert([
        {recipeId: 1, ingredientId: 2, quantity: 1.25},
        {recipeId: 1, ingredientId: 5, quantity: 1.25},
        {recipeId: 1, ingredientId: 8, quantity: 1.25},
        {recipeId: 1, ingredientId: 9, quantity: 1.25},
        {recipeId: 2, ingredientId: 1, quantity: 1.25},
        {recipeId: 2, ingredientId: 3, quantity: 1.25},
        {recipeId: 2, ingredientId: 6, quantity: 1.25},
        {recipeId: 2, ingredientId: 9, quantity: 1.25},
        {recipeId: 3, ingredientId: 4, quantity: 1.25},
        {recipeId: 3, ingredientId: 2, quantity: 1.25},
        {recipeId: 6, ingredientId: 4, quantity: 1.25},
        {recipeId: 6, ingredientId: 2, quantity: 1.25},
        {recipeId: 5, ingredientId: 3, quantity: 1.25},
        {recipeId: 4, ingredientId: 5, quantity: 1.25},
        {recipeId: 4, ingredientId: 4, quantity: 1.25}
      ]);
    });
};
