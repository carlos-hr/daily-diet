import React from "react";
import { MealCard } from "./components/MealCard";
import { Container } from "./styles";
import { Meal } from "src/@types/meal";

interface MealsProps {
  meals: Meal[];
  day: string;
}

export function DailyMealList({ meals, day }: MealsProps) {
  return (
    meals && (
      <React.Fragment>
        {meals.map((meal) => (
          <Container key={meal.id}>
            <MealCard
              hour={meal.hour}
              meal={meal.name}
              status={meal.status}
              id={meal.id}
              day={day}
            />
          </Container>
        ))}
      </React.Fragment>
    )
  );
}
