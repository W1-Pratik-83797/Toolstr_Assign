// // src/screens/RecipeList.js

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, FlatList, Alert, StyleSheet } from 'react-native';
// import { useRecipes } from '../context/RecipeContext';

// const RecipeList = ({ navigation }) => {
//   const { recipes, addRecipe, deleteRecipe } = useRecipes();
//   const [newRecipe, setNewRecipe] = useState('');

//   const handleAddRecipe = () => {
//     if (!newRecipe.trim()) {
//       Alert.alert('Validation Error', 'Please enter a recipe name.');
//       return;
//     }
//     addRecipe(newRecipe);
//     setNewRecipe('');
//   };

//   return (
//     <View style={{ padding: 20 }}>
//       <TextInput
//         placeholder="Recipe Name"
//         value={newRecipe}
//         onChangeText={setNewRecipe}
//         style={[styles.input, !newRecipe.trim() && styles.highlightBorder]}
//       />
//       <TouchableOpacity style={styles.button} onPress={handleAddRecipe}>
//         <Text style={styles.buttonText}>Add</Text>
//       </TouchableOpacity>

//       <FlatList
//         data={recipes}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.recipeItem}>
//             <TouchableOpacity onPress={() => navigation.navigate('RecipeDetails', { recipeId: item.id })}>
//               <Text style={styles.recipeText}>{item.name}</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => deleteRecipe(item.id)}>
//               <Text style={styles.deleteText}>Delete</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   input: {
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//   },
//   highlightBorder: {
//     borderColor: 'red',
//   },
//   button: {
//     backgroundColor: '#6c63ff',
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//     alignSelf: 'flex-start',
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 14,
//   },
//   recipeItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   recipeText: {
//     fontSize: 18,
//   },
//   deleteText: {
//     color: 'red',
//     fontSize: 14,
//   },
// });

// export default RecipeList;

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert, StyleSheet } from 'react-native';
import { useRecipes } from '../context/RecipeContext';

const RecipeList = ({ navigation }) => {
  const { recipes, addRecipe, deleteRecipe } = useRecipes();
  const [newRecipe, setNewRecipe] = useState('');

  const handleAddRecipe = () => {
    if (!newRecipe.trim()) {
      Alert.alert('Validation Error', 'Please enter a recipe name.');
      return;
    }
    addRecipe(newRecipe);
    setNewRecipe('');
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Recipe Name"
        value={newRecipe}
        onChangeText={setNewRecipe}
        style={[styles.input, !newRecipe.trim() && styles.highlightBorder]}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddRecipe}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.recipeItem}>
            <TouchableOpacity onPress={() => navigation.navigate('RecipeSummary', { recipeId: item.id })}>
              <Text style={styles.recipeText}>{item.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('RecipeDetails', { recipeId: item.id })}>
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteRecipe(item.id)}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
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
  recipeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  recipeText: {
    fontSize: 18,
  },
  editText: {
    color: 'blue',
    fontSize: 14,
    marginHorizontal: 10,
  },
  deleteText: {
    color: 'red',
    fontSize: 14,
  },
});

export default RecipeList;
