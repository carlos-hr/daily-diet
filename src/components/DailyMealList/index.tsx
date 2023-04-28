import React from "react";
import { View, Text, FlatList } from "react-native";
import { MealCard } from "./components/MealCard";
import { Container } from "./styles";

interface Meal {
  id: string;
  hour: string;
  meal: string;
  status: "onDiet" | "offDiet";
}

export interface Meals {
  id: string;
  day: string;
  meals: Meal[];
}

interface MealsProps {
  meals: Meal[];
}

export function DailyMealList({ meals }: MealsProps) {
  return (
    meals && (
      <React.Fragment>
        {meals.map((meal) => (
          <Container key={meal.id}>
            <MealCard
              hour={meal.hour}
              meal={meal.meal}
              status={meal.status}
              id={meal.id}
            />
          </Container>
        ))}
      </React.Fragment>
    )
  );
}
