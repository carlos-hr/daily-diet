import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type ButtonVariants = "primary" | "secondary";

interface ButtonStyleProps {
  variant: ButtonVariants;
}

export const Container = styled(TouchableOpacity)<ButtonStyleProps>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme, variant }) =>
    variant === "primary" ? theme.colors.gray_100 : theme.colors.white};
  border-color: ${({ theme, variant }) =>
    variant === "secondary" && theme.colors.gray_100};
  border: 1px solid;
  outline: none;
  height: 50px;
  border-radius: 6px;
  width: 100%;
`;

export const ButtonText = styled.Text<ButtonStyleProps>`
  color: ${({ theme, variant }) =>
    variant === "primary" ? theme.colors.white : theme.colors.gray_100};
  font-family: ${({ theme }) => theme.font_family.bold};
`;
