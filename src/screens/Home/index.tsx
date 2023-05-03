import {
  Container,
  DailyMealContainer,
  LogoContainer,
  MealDay,
  NewMealContainer,
} from "./styles";
import { Image, Text, FlatList } from "react-native";
import { HighlightCard } from "@components/HighlightCard";
import logo from "@assets/logo.png";
import { Button } from "@components/Button";
import { Plus } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { DailyMealList } from "@components/DailyMealList";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { DailyMeal, Stats } from "src/@types/meal";
import { getAllMeals } from "@storage/meal/getAllMeals";
import { getMealStats } from "@storage/meal/getMealStats";

export function Home() {
  const { colors } = useTheme();
  const [mealsData, setMealsData] = useState<DailyMeal[]>([]);
  const [mealsStats, setMealsStats] = useState<Stats | null>(null);

  const mealHighlight = mealsStats
    ? ((mealsStats.totalOnDiet / mealsStats.total) * 100).toFixed(1)
    : null;

  const fetchInitialData = async () => {
    const mealsList = await getAllMeals();
    const stats = await getMealStats();

    setMealsData(mealsList);
    setMealsStats(stats);
  };

  useFocusEffect(
    useCallback(() => {
      fetchInitialData();
    }, [])
  );

  const { navigate } = useNavigation();

  function navigateToStatistics() {
    navigate("statistics");
  }

  function handleAddNewMeal() {
    navigate("new-meal");
  }

  return (
    <Container>
      <LogoContainer style={{ marginBottom: 32 }}>
        <Image source={logo} />
      </LogoContainer>

      <HighlightCard
        type={
          mealHighlight && Number(mealHighlight) >= 0.5
            ? "positive"
            : "negative"
        }
        highlightData={`${mealHighlight}%`}
        highlightText="das refeições dentro da dieta"
        showDetailsButton
        onPress={navigateToStatistics}
      />

      <NewMealContainer>
        <Text>Refeições</Text>

        <Button
          buttonText="Nova refeição"
          Icon={<Plus color={colors.gray_500} size={20} weight="bold" />}
          variant="primary"
          onPress={handleAddNewMeal}
        />
      </NewMealContainer>

      {mealsData && (
        <FlatList
          style={{ marginTop: 32 }}
          data={mealsData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <DailyMealContainer>
              <MealDay>{item.day}</MealDay>
              <DailyMealList meals={item.meals} day={item.day} />
            </DailyMealContainer>
          )}
          ListEmptyComponent={() => (
            <Text>Que tal cadastrar a primeira refeição?</Text>
          )}
        />
      )}
    </Container>
  );
}
