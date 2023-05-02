import { Meal } from "src/@types/meal";
import { findDailyMeal } from "./findDailyMeal";

export const findMeal = async (id: string, day: string): Promise<Meal> => {
  try {
    const mealOfDay = await findDailyMeal(day);

    if (!mealOfDay) {
      throw new Error("There are no meals in that day.");
    }

    const meal = mealOfDay.meals.find((meal) => meal.id === id);

    if (!meal) {
      throw new Error("Meal not found.");
    }

    return meal;
  } catch (error) {
    throw error;
  }
};
