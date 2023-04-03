import { createStackNavigator } from "@react-navigation/stack";
import { Home, Statistics } from "@screens/index";

export function AppRoutes() {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
    </Navigator>
  );
}
