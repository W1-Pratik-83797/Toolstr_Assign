// src/screens/RecipeDetails.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useRecipes } from '../context/RecipeContext';
import IngredientList from '../components/IngredientList';

const RecipeDetails = ({ route }) => {
  const { recipeId } = route.params;
  const { recipes, addIngredient, updateRecipe } = useRecipes();
  const [newIngredient, setNewIngredient] = useState('');
  const [recipeName, setRecipeName] = useState('');

  const recipe = recipes.find((recipe) => recipe.id === recipeId);

  if (!recipe) return <Text>Recipe not found.</Text>;

  const handleUpdateRecipe = () => {
    if (!recipeName.trim()) {
      Alert.alert('Validation Error', 'Please enter a recipe name.');
      return;
    }
    updateRecipe(recipe.id, recipeName);
  };

  const handleAddIngredient = () => {
    if (!newIngredient.trim()) {
      Alert.alert('Validation Error', 'Please enter an ingredient name.');
      return;
    }
    addIngredient(recipe.id, newIngredient);
    setNewIngredient('');
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Recipe Name"
        value={recipeName || recipe.name}
        onChangeText={setRecipeName}
        style={[styles.input, !recipeName.trim() && styles.highlightBorder]}
      />
      <TouchableOpacity style={styles.button} onPress={handleUpdateRecipe}>
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>

      <TextInput
        placeholder="Ingredient Name"
        value={newIngredient}
        onChangeText={setNewIngredient}
        style={[styles.input, !newIngredient.trim() && styles.highlightBorder]}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddIngredient}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <IngredientList ingredients={recipe.ingredients} recipeId={recipe.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  highlightBorder: {
    borderColor: 'red',
  },
  button: {
    backgroundColor: '#6c63ff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
});

export default RecipeDetails;
