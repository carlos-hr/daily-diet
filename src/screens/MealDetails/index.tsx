import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { HighlightCard } from "@components/HighlightCard";
import { Circle, PencilSimpleLine, Trash } from "phosphor-react-native";
import { Text } from "react-native";
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

export function MealDetails() {
  const { colors } = useTheme();
  const meal = {
    day: "12/08/2022",
    hour: "09:00",
    meal: "Café",
    id: "1-a",
    status: "onDiet",
    description:
      "Sanduíche de pão integral com atum e salada de alface e tomate",
  };

  return (
    <>
      <Header type="tertiary" showBackButton>
        <HighlightCard type="neutral">
          <HeaderText>Refeição</HeaderText>
        </HighlightCard>
      </Header>

      <Container>
        <MealDataContainer>
          <MealDetailsContainer>
            <MealName>{meal.meal}</MealName>
            <MealDescription>{meal.description}</MealDescription>
          </MealDetailsContainer>

          <MealDetailsContainer>
            <MealDateAndTimeTitle>Data e hora</MealDateAndTimeTitle>
            <MealDateAndTimeText>
              {meal.day} às {meal.hour}
            </MealDateAndTimeText>
          </MealDetailsContainer>

          <MealBadge>
            <Circle color={colors.green_dark} weight="fill" size={8} />
            <Text>dentro da dieta</Text>
          </MealBadge>
        </MealDataContainer>

        <ButtonContainer>
          <Button
            buttonText="Editar refeição"
            Icon={<PencilSimpleLine weight="light" color={colors.white} />}
          />
          <Button
            buttonText="Excluir refeição"
            variant="secondary"
            Icon={<Trash weight="light" />}
          />
        </ButtonContainer>
      </Container>
    </>
  );
}
