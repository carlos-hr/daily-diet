import { DailyMeal } from "src/@types/meal";
import { getAllMeals } from "./getAllMeals";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/config";

export const deleteMeal = async (id: string, day: string) => {
  try {
    const currentMeals = await getAllMeals();
    const mealsOfDay = currentMeals.find((meal) => meal.day === day);

    if (!mealsOfDay) {
      throw new Error("No meals were found in this day.");
    }

    const filteredList = currentMeals.filter((meal) => meal.day !== day);
    const newMealsOfDayList = mealsOfDay.meals.filter((meal) => meal.id !== id);
    const newList = [];

    if (newMealsOfDayList.length > 0) {
      const updatedMeal: DailyMeal = {
        ...mealsOfDay,
        meals: [...newMealsOfDayList],
      };
      newList.push(updatedMeal);
    }

    const storage = JSON.stringify([...filteredList, ...newList]);
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
};
