# Recipe Organizer App

Description: |
  The Recipe Organizer App is a React Native application designed to help users manage their recipes and ingredients effectively. With this app, users can:
  
  - Add, view, edit, and delete recipes.
  - Manage ingredients associated with each recipe.
  - Utilize a user-friendly interface to keep track of culinary creations and improve cooking experiences.

Features:
  - Recipe Management: Add, delete, and view recipes.
  - Ingredient Management: Add, edit, and delete ingredients for each recipe.
  - Context API: Uses React Context API for seamless state management.
  - Responsive Design: Optimized for various device sizes and orientations.

Requirements:
  - Node.js (v14 or later): https://nodejs.org/
  - Expo CLI: https://docs.expo.dev/get-started/installation/
    - Install via terminal: `npm install -g expo-cli`
  - Android Studio: https://developer.android.com/studio
  - Xcode: https://developer.apple.com/xcode/
    - For running the app on Android or iOS devices respectively.

Project_Structure:
  project-root/
    - App.js: Main entry point with Navigation and Theme setup.
    - src/
      - context/
        - RecipeContext.js: Context API and custom hooks to manage recipe and ingredient state.
      - screens/
        - RecipeList.js: Screen displaying a list of all recipes, includes add & delete functionality.
        - RecipeDetails.js: Screen displaying selected recipe details, allowing ingredient management.
        - RecipeSummary.js: Screen showing a summary of the selected recipe, including ingredients and sub-ingredients.
      - components/
        - IngredientList.js: Component to render ingredients for each recipe with CRUD options.
    - package.json: Project dependencies and scripts.
    

Getting_Started:
  Step_1:
    Description: Clone the repository.
    Commands:
      - git clone https://github.com/W1-Pratik-83797/Toolstr_Assign.git
      - cd recipe-organizer
  Step_2:
    Description: Install dependencies.
    Commands:
      - npm install
  Step_3:
    Description: Start the development server.
    Commands:
      - npm start
    Notes: |
      After running `npm start`, the Expo development server will launch. You will see a QR code in the terminal and your web browser. You can scan this QR code with the Expo Go app on your mobile device to open the application directly. Alternatively, you can choose to run the app in an Android emulator or iOS simulator, depending on your development environment.

Running_the_App:
  Android:
    - Ensure you have the Expo Go app installed on your Android device from the Google Play Store.
    - Open the Expo Go app and scan the QR code displayed in the terminal or your browser.
    
  iOS:
    - Ensure you have the Expo Go app installed on your iOS device from the App Store.
    - Open the Expo Go app and scan the QR code displayed in the terminal or your browser.
    - Alternatively, you can run the app in an iOS simulator if you have Xcode installed.

Alternative_APK_Installation:
  Description: |
    If you prefer, you can install the app directly on your Android device using the APK file.
  Steps:
    - Download the APK file (universal.apk) from a shared link.(https://drive.google.com/file/d/17Pt88bPM5JNE9EQ4k0iuQBYkHV6HheYY/view?usp=sharing)
    - Ensure your device allows installations from unknown sources (Settings > Security > Unknown Sources).
    - Open the APK file on your device to install the app directly.

