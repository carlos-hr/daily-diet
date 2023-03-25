import styled from "styled-components/native";

export type HeaderStyleProps = "primary" | "secondary" | "tertiary";

interface Props {
  type: HeaderStyleProps;
}

export const Container = styled.View<Props>`
  padding: 24px;
  flex-direction: row;
  background-color: ${({ theme, type }) => {
    switch (type) {
      case "primary":
        return theme.colors.green_light;

      case "secondary":
        return theme.colors.red_light;

      case "tertiary":
        return theme.colors.gray_500;

      default:
        return theme.colors.green_light;
    }
  }};
`;

export const OptionalContent = styled.View`
  margin: auto;
`;
