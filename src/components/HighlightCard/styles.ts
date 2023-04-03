import styled from "styled-components/native";
import { Pressable } from "react-native";

export type HighlightCardStylesProps = "positive" | "negative" | "neutral";

interface Props {
  type: HighlightCardStylesProps;
}

export const Container = styled.View<Props>`
  background-color: ${({ theme, type }) => {
    switch (type) {
      case "positive":
        return theme.colors.green_light;

      case "negative":
        return theme.colors.red_light;

      case "neutral":
        return theme.colors.gray_500;

      default:
        return theme.colors.green_light;
    }
  }};

  height: 120px;
  border-radius: 8px;
  flex-direction: row;
  margin-top: 48px;
  position: relative;
`;

export const TextContainer = styled.View`
  gap: 8px;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const TextHighlight = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.xl};
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.font_family.regular};
  font-size: ${({ theme }) => theme.font_size.xs};
`;

export const IconContainer = styled(Pressable)`
  justify-self: flex-end;
  position: absolute;
  right: 8px;
  top: 8px;
`;
