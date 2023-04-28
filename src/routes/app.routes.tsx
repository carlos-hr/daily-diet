import { createStackNavigator } from "@react-navigation/stack";
import {
  EditMeal,
  Home,
  MealDetails,
  NewMeal,
  NewMealFeedback,
  Statistics,
} from "@screens/index";

export function AppRoutes() {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="new-meal" component={NewMeal} />
      <Screen name="feedback" component={NewMealFeedback} />
      <Screen name="meal-detail" component={MealDetails} />
      <Screen name="edit-meal" component={EditMeal} />
    </Navigator>
  );
}
