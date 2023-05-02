import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/config";
import { DailyMeal } from "src/@types/meal";

export const getAllMeals = async (): Promise<DailyMeal[]> => {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);
    const allMeals: DailyMeal[] = storage ? JSON.parse(storage) : [];

    return allMeals;
  } catch (error) {
    throw error;
  }
};
