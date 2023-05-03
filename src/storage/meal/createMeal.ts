import { DailyMeal, Meal } from "src/@types/meal";
import { findDailyMeal } from "./findDailyMeal";
import { generateId } from "@utils/generic";
import { getAllMeals } from "./getAllMeals";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/config";

export const createMeal = async (meal: Meal, day: string) => {
  try {
    const existingMealInDay = await findDailyMeal(day);
    const currentMeals = await getAllMeals();
    const newMealsArray: DailyMeal[] = [];

    if (!existingMealInDay) {
      const newMealId = generateId();
      const newDailyMeal = {
        id: newMealId,
        day,
        meals: [meal],
      };

      newMealsArray.push(...currentMeals, newDailyMeal);
    } else {
      const mealsList = currentMeals.filter(
        (meal) => meal.id !== existingMealInDay.id
      );

      const { meals, id, day: existingDay } = existingMealInDay;

      const addedMeal = {
        id,
        day: existingDay,
        meals: [...meals, meal],
      };

      newMealsArray.push(...mealsList, addedMeal);
    }

    const storage = JSON.stringify(newMealsArray);
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
};
