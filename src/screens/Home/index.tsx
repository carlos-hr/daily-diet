import {
  Container,
  LogoContainer,
  MealsList,
  NewMealContainer,
} from "./styles";
import { Image, Text } from "react-native";
import { HighlightCard } from "@components/HighlightCard";
import logo from "@assets/logo.png";
import { Button } from "@components/Button";
import { Plus } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { MealCard } from "@components/MealCard";

export function Home() {
  const { colors } = useTheme();

  return (
    <Container>
      <LogoContainer>
        <Image source={logo} />
      </LogoContainer>

      <HighlightCard type="positive" percentOfMealsOnDiet={90} />

      <NewMealContainer>
        <Text>Refeições</Text>

        <Button
          buttonText="Nova refeição"
          Icon={<Plus color={colors.gray_500} size={20} weight="bold" />}
          variant="primary"
        />
      </NewMealContainer>

      <MealsList>
        <MealCard hour="20:00" meal="X-tudo" />
      </MealsList>
    </Container>
  );
}
