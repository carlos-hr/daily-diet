import { createStackNavigator } from "@react-navigation/stack";
import { Home, Statistics } from "@screens/index";
import { NewMeal } from "@screens/NewMeal";
import { NewMealFeedback } from "@screens/NewMealFeedback";

export function AppRoutes() {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="new-meal" component={NewMeal} />
      <Screen name="feedback" component={NewMealFeedback} />
    </Navigator>
  );
}
