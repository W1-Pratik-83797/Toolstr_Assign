// src/components/IngredientList.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert, StyleSheet } from 'react-native';
import { useRecipes } from '../context/RecipeContext';

const IngredientList = ({ ingredients, recipeId }) => {
  const { addSubIngredient, deleteIngredient, deleteSubIngredient } = useRecipes();
  const [newSubIngredient, setNewSubIngredient] = useState('');

  const handleAddSubIngredient = (ingredientId) => {
    if (!newSubIngredient.trim()) {
      Alert.alert('Validation Error', 'Please enter a sub-ingredient name.');
      return;
    }
    addSubIngredient(recipeId, ingredientId, newSubIngredient);
    setNewSubIngredient('');
  };

  return (
    <FlatList
      data={ingredients}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View>
          <View style={styles.ingredientItem}>
            <Text style={styles.ingredientText}>{item.name}</Text>
            <TouchableOpacity onPress={() => deleteIngredient(recipeId, item.id)}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>

          <TextInput
            placeholder="Sub-Ingredient Name"
            value={newSubIngredient}
            onChangeText={setNewSubIngredient}
            style={[styles.input, !newSubIngredient.trim() && styles.highlightBorder]}
          />
          <TouchableOpacity style={styles.button} onPress={() => handleAddSubIngredient(item.id)}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
          
          <FlatList
            data={item.subIngredients}
            keyExtractor={(subItem) => subItem.id}
            renderItem={({ item: subItem }) => (
              <View style={styles.subIngredientItem}>
                <Text>{subItem.name}</Text>
                <TouchableOpacity onPress={() => deleteSubIngredient(recipeId, item.id, subItem.id)}>
                  <Text style={styles.deleteText}>Delete</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      )}
    />
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
  ingredientItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ingredientText: {
    fontSize: 18,
  },
  deleteText: {
    color: 'red',
    fontSize: 14,
  },
  subIngredientItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
  },
});

export default IngredientList;

