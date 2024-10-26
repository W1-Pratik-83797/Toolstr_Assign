

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RecipeProvider } from './src/context/RecipeContext';
import RecipeList from './src/screens/RecipeList';
import RecipeDetails from './src/screens/RecipeDetails';
import RecipeSummary from './src/screens/RecipeSummary'; // Import the new RecipeSummary component

const Stack = createStackNavigator();

const App = () => {
  return (
    <RecipeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="RecipeList">
          <Stack.Screen name="RecipeList" component={RecipeList} options={{ title: 'Recipes' }} />
          <Stack.Screen name="RecipeDetails" component={RecipeDetails} options={{ title: 'Recipe Details' }} />
          <Stack.Screen name="RecipeSummary" component={RecipeSummary} options={{ title: 'Recipe Summary' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecipeProvider>
  );
};

export default App;
