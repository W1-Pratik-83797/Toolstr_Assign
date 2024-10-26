// src/context/RecipeContext.js

import React, { createContext, useState, useContext } from 'react';

const RecipeContext = createContext();

// Custom Hook
export const useRecipes = () => useContext(RecipeContext);

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (name) => {
    setRecipes([...recipes, { id: Date.now().toString(), name, ingredients: [] }]);
  };

  const updateRecipe = (id, updatedName) => {
    setRecipes(recipes.map(recipe => recipe.id === id ? { ...recipe, name: updatedName } : recipe));
  };

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  const addIngredient = (recipeId, ingredientName) => {
    setRecipes(recipes.map(recipe => 
      recipe.id === recipeId
        ? { ...recipe, ingredients: [...recipe.ingredients, { id: Date.now().toString(), name: ingredientName, subIngredients: [] }] }
        : recipe
    ));
  };

  const updateIngredient = (recipeId, ingredientId, updatedName) => {
    setRecipes(recipes.map(recipe => 
      recipe.id === recipeId
        ? {
            ...recipe,
            ingredients: recipe.ingredients.map(ingredient => 
              ingredient.id === ingredientId ? { ...ingredient, name: updatedName } : ingredient
            )
          }
        : recipe
    ));
  };

  const deleteIngredient = (recipeId, ingredientId) => {
    setRecipes(recipes.map(recipe => 
      recipe.id === recipeId
        ? { ...recipe, ingredients: recipe.ingredients.filter(ingredient => ingredient.id !== ingredientId) }
        : recipe
    ));
  };

  const addSubIngredient = (recipeId, ingredientId, subIngredientName) => {
    setRecipes(recipes.map(recipe => 
      recipe.id === recipeId
        ? {
            ...recipe,
            ingredients: recipe.ingredients.map(ingredient => 
              ingredient.id === ingredientId
                ? { ...ingredient, subIngredients: [...ingredient.subIngredients, { id: Date.now().toString(), name: subIngredientName }] }
                : ingredient
            )
          }
        : recipe
    ));
  };

  const deleteSubIngredient = (recipeId, ingredientId, subIngredientId) => {
    setRecipes(recipes.map(recipe => 
      recipe.id === recipeId
        ? {
            ...recipe,
            ingredients: recipe.ingredients.map(ingredient => 
              ingredient.id === ingredientId
                ? { ...ingredient, subIngredients: ingredient.subIngredients.filter(sub => sub.id !== subIngredientId) }
                : ingredient
            )
          }
        : recipe
    ));
  };

  return (
    <RecipeContext.Provider value={{ 
      recipes, addRecipe, updateRecipe, deleteRecipe,
      addIngredient, updateIngredient, deleteIngredient, 
      addSubIngredient, deleteSubIngredient 
    }}>
      {children}
    </RecipeContext.Provider>
  );
};
