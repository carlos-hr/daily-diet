import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export type HeaderStyleProps = "primary" | "secondary" | "tertiary";
export type HeaderHeightProps = "long" | "short";

interface Props {
  type: HeaderStyleProps;
  variant: HeaderHeightProps;
}

export const Container = styled(SafeAreaView)<Props>`
  position: relative;
  z-index: 1;
  padding: 12px;
  height: ${({ variant }) => (variant === "long" ? "160px" : "80px")};
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
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  z-index: -1;
`;
