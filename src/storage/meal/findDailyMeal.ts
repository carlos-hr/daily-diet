import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/config";
import { DailyMeal } from "src/@types/meal";

export const findDailyMeal = async (day: string): Promise<DailyMeal | null> => {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    if (!storage) {
      return null;
    }

    const allMeals: DailyMeal[] = JSON.parse(storage);

    const mealOfDay = allMeals.find((dailyMeal) => dailyMeal.day === day);

    if (!mealOfDay) {
      return null;
    }

    return mealOfDay;
  } catch (error) {
    throw error;
  }
};
