import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/config";
import { DailyMeal, Stats } from "src/@types/meal";

export const getMealStats = async (): Promise<Stats | null> => {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    const mealsList: DailyMeal[] = storage ? JSON.parse(storage) : [];

    if (mealsList.length === 0) {
      return null;
    }

    const totalMeals = mealsList.reduce((acc, dailyMeal) => {
      acc += dailyMeal.meals.length;
      return acc;
    }, 0);

    const onDietMeals = mealsList.reduce((acc, dailyMeal) => {
      const onDiet = dailyMeal.meals.filter((meal) => meal.status === "onDiet");
      acc += onDiet.length;

      return acc;
    }, 0);

    const sequenceOfOnDiet = mealsList.reduce((acc, dailyMeal) => {
      const statusMap = dailyMeal.meals.map((meal) => meal.status);
      let currentSequence = 0;

      for (let i = 0; i < statusMap.length; i++) {
        if (statusMap[i] === "onDiet") {
          currentSequence++;
          if (currentSequence > acc) {
            acc = currentSequence;
          }
        } else {
          currentSequence = 0;
        }
      }

      return acc;
    }, 0);

    const offDietMeals = totalMeals - onDietMeals;

    return {
      total: totalMeals,
      totalOnDiet: onDietMeals,
      totalOffDiet: offDietMeals,
      bestSequence: sequenceOfOnDiet,
    };
  } catch (error) {
    throw error;
  }
};
