import { ArrowUpRight } from "phosphor-react-native";
import { PressableProps } from "react-native";
import { useTheme } from "styled-components/native";
import {
  Container,
  Description,
  IconContainer,
  TextHighlight,
  TextContainer,
  HighlightCardStylesProps,
} from "./styles";

interface StatisticsProps extends PressableProps {
  type: HighlightCardStylesProps;
  showDetailsButton?: boolean;
  navigationLink?: string;
  percentOfMealsOnDiet: number;
}

export function HighlightCard(props: StatisticsProps) {
  const {
    type,
    percentOfMealsOnDiet,
    showDetailsButton = false,
    ...rest
  } = props;
  const { colors } = useTheme();

  return (
    <Container type={type}>
      <TextContainer>
        <TextHighlight>{percentOfMealsOnDiet}%</TextHighlight>
        <Description>das refeições dentro da dieta</Description>
      </TextContainer>

      {showDetailsButton && (
        <IconContainer {...rest}>
          <ArrowUpRight
            color={type === "positive" ? colors.green_dark : colors.red_dark}
            size={32}
          />
        </IconContainer>
      )}
    </Container>
  );
}
