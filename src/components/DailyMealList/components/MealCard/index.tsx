import { Circle } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { Container, MealHourText, MealText, MealTextContainer } from "./styles";

interface MealCardProps {
  status?: "onDiet" | "offDiet";
  hour: string;
  meal: string;
}

export function MealCard({ hour, meal, status = "onDiet" }: MealCardProps) {
  const { colors } = useTheme();

  return (
    <Container>
      <MealHourText>{hour}</MealHourText>

      <MealTextContainer>
        <MealText numberOfLines={1}>{meal}</MealText>
      </MealTextContainer>

      <Circle
        color={status === "onDiet" ? colors.green_mid : colors.red_mid}
        weight="fill"
      />
    </Container>
  );
}
