import { ArrowUpRight } from "phosphor-react-native";
import { PressableProps, TextStyle } from "react-native";
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
  highlightData?: string;
  highlightText?: string;
  fullWidth?: boolean;
  highlightDataStyle?: string;
  highlightTextStyle?: string;
}

export function HighlightCard(props: React.PropsWithChildren<StatisticsProps>) {
  const {
    type,
    highlightData,
    highlightText,
    showDetailsButton = false,
    fullWidth = true,
    highlightDataStyle,
    highlightTextStyle,
    children,
    ...rest
  } = props;
  const { colors } = useTheme();

  return (
    <Container type={type} fullWidth={fullWidth}>
      <TextContainer>
        {highlightData && (
          <TextHighlight customStyle={highlightDataStyle}>
            {highlightData}
          </TextHighlight>
        )}
        {highlightText && (
          <Description customStyle={highlightTextStyle}>
            {highlightText}
          </Description>
        )}
        {children && children}
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
