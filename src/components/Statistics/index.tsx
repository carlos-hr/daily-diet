import { ArrowUpRight } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import {
  Container,
  Description,
  IconContainer,
  MealsPercentage,
  MealsTextContainer,
  StatisticsStylesProps,
} from "./styles";

interface StatisticsProps {
  goal: StatisticsStylesProps;
  percentOfMealsOnDiet: number;
}

export function Statistics(props: StatisticsProps) {
  const { goal, percentOfMealsOnDiet } = props;
  const { colors } = useTheme();

  return (
    <Container type={goal}>
      <MealsTextContainer>
        <MealsPercentage>{percentOfMealsOnDiet}%</MealsPercentage>
        <Description>das refeições dentro da dieta</Description>
      </MealsTextContainer>

      <IconContainer>
        <ArrowUpRight
          color={goal === "achieved" ? colors.green_dark : colors.red_dark}
          size={32}
        />
      </IconContainer>
    </Container>
  );
}
