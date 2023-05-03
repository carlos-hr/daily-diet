# Daily Diet Application Documentation

This documentation describes the features and requirements of the Daily Diet application.

## Features

- Add a new meal
- Edit a meal
- Remove a meal from the listing
- Show diet progress statistics
- Screen navigation in stack
- Local storage of meals

## Technical Details

The Daily Diet application is built with React Native and uses the following libraries and components:

- React Native
- TypeScript
- React Navigation
- Styled Components
- Local Storage (using Async Storage)

## Installation

1. Clone this repository
2. Install the dependencies using `npm install` or `yarn`
3. Run the application using `expo start`
 
## Meals List Screen

- Show a list of all meals registered by the user.
- For each meal, display the date and the list of foods consumed.
- Allow the user to add, edit, and delete meals from the list.
- Provide a link to the Statistics Screen.

## Add Meal Screen

- Allow the user to register a new meal.
- Request the following information from the user: date and list of foods consumed.
- Validate that the fields are not empty.
- Save the new meal in the local storage.
- Redirect the user back to the Meals List Screen.

## Edit Meal Screen

- Allow the user to edit an existing meal.
- Display the current date and list of foods consumed for the meal.
- Allow the user to modify the date and list of foods.
- Validate that the fields are not empty.
- Update the meal in the local storage.
- Redirect the user back to the Meals List Screen.

## Statistics Screen

- Show the user's diet progress statistics.
- Display the total number of meals consumed, the number of meals consumed within the diet, and the percentage of meals -consumed within the diet.
- Retrieve the information from the local storage.
