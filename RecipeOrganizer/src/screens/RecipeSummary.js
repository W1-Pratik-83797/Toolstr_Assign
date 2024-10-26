// import React from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';
// import { useRecipes } from '../context/RecipeContext';

// const RecipeSummary = ({ route, navigation }) => {
//   const { recipeId } = route.params;
//   const { recipes } = useRecipes();
//   const recipe = recipes.find((recipe) => recipe.id === recipeId);

//   if (!recipe) return <Text>Recipe not found.</Text>;

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Recipe Summary</Text>
//       <Text style={styles.label}>Recipe Name: {recipe.name}</Text>
//       <Text style={styles.label}>Ingredients:</Text>
//       {recipe.ingredients.map((ingredient) => (
//         <Text key={ingredient.id} style={styles.ingredient}>
//           {ingredient.name}
//           {ingredient.subIngredients.length > 0 && (
//             <View>
//               <Text style={styles.subLabel}>Sub-ingredients:</Text>
//               {ingredient.subIngredients.map((sub) => (
//                 <Text key={sub.id} style={styles.subIngredient}>
//                   {sub.name}
//                 </Text>
//               ))}
//             </View>
//           )}
//         </Text>
//       ))}
//       <Button title="Edit Recipe" onPress={() => navigation.navigate('RecipeDetails', { recipeId })} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   label: {
//     fontSize: 18,
//     marginVertical: 5,
//   },
//   ingredient: {
//     fontSize: 16,
//     marginLeft: 10,
//   },
//   subLabel: {
//     fontWeight: 'bold',
//     marginTop: 5,
//   },
//   subIngredient: {
//     fontSize: 14,
//     marginLeft: 20,
//   },
// });

// export default RecipeSummary;

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRecipes } from '../context/RecipeContext';

const RecipeSummary = ({ route, navigation }) => {
  const { recipeId } = route.params;
  const { recipes } = useRecipes();
  const recipe = recipes.find((recipe) => recipe.id === recipeId);

  if (!recipe) return <Text>Recipe not found.</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipe Summary</Text>
      <Text style={styles.label}>Recipe Name: {recipe.name}</Text>
      <Text style={styles.label}>Ingredients:</Text>
      {recipe.ingredients.map((ingredient) => (
        <View key={ingredient.id}>
          <Text style={styles.ingredient}>{ingredient.name}</Text>
          {ingredient.subIngredients.length > 0 && (
            <View style={styles.subIngredientsContainer}>
              <Text style={styles.subLabel}>Sub-ingredients:</Text>
              {ingredient.subIngredients.map((sub) => (
                <Text key={sub.id} style={styles.subIngredient}>
                  {sub.name}
                </Text>
              ))}
            </View>
          )}
        </View>
      ))}
      <Button title="Edit Recipe" onPress={() => navigation.navigate('RecipeDetails', { recipeId })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    marginVertical: 5,
  },
  ingredient: {
    fontSize: 16,
    marginLeft: 10,
  },
  subIngredientsContainer: {
    marginLeft: 20,
  },
  subLabel: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  subIngredient: {
    fontSize: 14,
    marginLeft: 20,
  },
});

export default RecipeSummary;
