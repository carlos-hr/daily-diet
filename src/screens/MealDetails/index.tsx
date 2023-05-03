import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { HighlightCard } from "@components/HighlightCard";
import { Circle, PencilSimpleLine, Trash } from "phosphor-react-native";
import { Alert, Text } from "react-native";
import { useTheme } from "styled-components/native";
import {
  ButtonContainer,
  Container,
  HeaderText,
  MealBadge,
  MealDataContainer,
  MealDateAndTimeText,
  MealDateAndTimeTitle,
  MealDescription,
  MealDetailsContainer,
  MealName,
} from "./styles";
import { Meal } from "src/@types/meal";
import { useCallback, useState } from "react";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { findMeal } from "@storage/meal/findMeal";
import { deleteMeal } from "@storage/meal/deleteMeal";

interface RouteParams {
  id: string;
  day: string;
}

export function MealDetails() {
  const { colors } = useTheme();
  const { params } = useRoute();
  const { navigate } = useNavigation();

  const { id, day } = params as RouteParams;

  const [meal, setMeal] = useState<Meal | null>(null);

  const fetchMeal = async () => {
    const data = await findMeal(id, day);
    setMeal(data);
  };

  useFocusEffect(
    useCallback(() => {
      fetchMeal();
    }, [])
  );

  const deleteMealAction = async () => {
    await deleteMeal(id, day);
    navigate("home");
  };

  const handleDeleteMeal = async () => {
    Alert.alert("", "Deseja realmente excluir o registro da refeição?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => deleteMealAction() },
    ]);
  };

  return (
    meal && (
      <>
        <Header type="tertiary" showBackButton>
          <HighlightCard
            type={meal.status === "offDiet" ? "negative" : "positive"}
          >
            <HeaderText>Refeição</HeaderText>
          </HighlightCard>
        </Header>

        <Container>
          <MealDataContainer>
            <MealDetailsContainer>
              <MealName>{meal.name}</MealName>
              <MealDescription>{meal.description}</MealDescription>
            </MealDetailsContainer>

            <MealDetailsContainer>
              <MealDateAndTimeTitle>Data e hora</MealDateAndTimeTitle>
              <MealDateAndTimeText>
                {day} às {meal.hour}
              </MealDateAndTimeText>
            </MealDetailsContainer>

            <MealBadge>
              <Circle
                color={
                  meal.status === "offDiet"
                    ? colors.red_dark
                    : colors.green_dark
                }
                weight="fill"
                size={8}
              />
              <Text>
                {meal.status === "offDiet"
                  ? "fora da dieta"
                  : "dentro da dieta"}
              </Text>
            </MealBadge>
          </MealDataContainer>

          <ButtonContainer>
            <Button
              buttonText="Editar refeição"
              Icon={<PencilSimpleLine weight="light" color={colors.white} />}
              onPress={() => navigate("edit-meal", { day, id: meal.id })}
            />
            <Button
              buttonText="Excluir refeição"
              variant="secondary"
              Icon={<Trash weight="light" />}
              onPress={handleDeleteMeal}
            />
          </ButtonContainer>
        </Container>
      </>
    )
  );
}
