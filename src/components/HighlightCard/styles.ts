import styled, { css } from "styled-components/native";
import { Pressable } from "react-native";
import { TextStyle } from "react-native";

export type HighlightCardStylesProps = "positive" | "negative" | "neutral";

type CustomStyle = {
  customStyle?: string;
};

interface Props {
  type: HighlightCardStylesProps;
  fullWidth?: boolean;
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
  width: ${(props) => (props.fullWidth ? "100%" : "50%")};

  height: 120px;
  border-radius: 8px;
  flex-direction: row;
  position: relative;
`;

export const TextContainer = styled.View`
  gap: 8px;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const TextHighlight = styled.Text<CustomStyle>`
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.xl};
  ${({ customStyle }) =>
    customStyle &&
    css`
      ${customStyle}
    `}
`;

export const Description = styled.Text<CustomStyle>`
  font-family: ${({ theme }) => theme.font_family.regular};
  font-size: ${({ theme }) => theme.font_size.xs};
  ${({ customStyle }) =>
    customStyle &&
    css`
      ${customStyle}
    `}
`;

export const IconContainer = styled(Pressable)`
  justify-self: flex-end;
  position: absolute;
  right: 8px;
  top: 8px;
`;
