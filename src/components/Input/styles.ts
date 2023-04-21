import styled from "styled-components/native";
import { TextInput } from "react-native";

export type InputSizes = "sm" | "lg";

interface StyleProps {
  size: InputSizes;
}

interface ContainerStyleProps {
  fullWidth: boolean;
}

export const Container = styled.View<ContainerStyleProps>`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "50%")};
`;

export const InputLabel = styled.Text``;

export const StyledInput = styled(TextInput)<StyleProps>`
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.gray_500};
  min-height: ${({ size }) => (size === "sm" ? "48px" : "120px")};
`;
