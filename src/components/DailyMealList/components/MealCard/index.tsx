import { useNavigation } from "@react-navigation/native";
import { Circle } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { Container, MealHourText, MealText, MealTextContainer } from "./styles";

interface MealCardProps {
  status?: "onDiet" | "offDiet";
  hour: string;
  meal: string;
  id: string;
  day: string;
}

export function MealCard({
  id,
  day,
  hour,
  meal,
  status = "onDiet",
}: MealCardProps) {
  const { colors } = useTheme();
  const { navigate } = useNavigation();

  return (
    <Container onPress={() => navigate("meal-detail", { id, day })}>
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
