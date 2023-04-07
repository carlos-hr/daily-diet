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
  highlightData: string;
  highlightText: string;
  fullWidth?: boolean;
}

export function HighlightCard(props: StatisticsProps) {
  const {
    type,
    highlightData,
    highlightText,
    showDetailsButton = false,
    fullWidth = true,
    ...rest
  } = props;
  const { colors } = useTheme();

  return (
    <Container type={type} fullWidth={fullWidth}>
      <TextContainer>
        <TextHighlight>{highlightData}</TextHighlight>
        <Description>{highlightText}</Description>
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
