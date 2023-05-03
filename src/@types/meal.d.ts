export type MealType = "onDiet" | "offDiet";

export interface Meal {
  id: string;
  name: string;
  description: string;
  hour: string;
  status: MealType;
}

export interface DailyMeal {
  id: string;
  day: string;
  meals: Meal[];
}
