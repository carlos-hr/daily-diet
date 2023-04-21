import styled from "styled-components/native";

export type ButtonVariants = "primary" | "secondary";

interface ButtonStyleProps {
  isPressed: boolean;
  variant: ButtonVariants;
}

export const Container = styled.View``;

export const HeaderText = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold};
`;

export const NewMealFormContainer = styled.View`
  z-index: 1;
  margin-top: 12px;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  background-color: ${({ theme }) => theme.colors.gray_700};
  height: 100%;
  padding: 24px;
`;

export const TwoColumnsContainer = styled.View`
  flex-direction: row;
  width: 100%;
  gap: 8px;
`;

export const DietHeading = styled.Text`
  color: ${({ theme }) => theme.colors.gray_200};
  font-size: ${({ theme }) => theme.font_size.xs};
  font-family: ${({ theme }) => theme.font_family.bold};
`;

export const DietButton = styled.Pressable<ButtonStyleProps>`
  height: 50px;
  background-color: ${({ theme, isPressed }) =>
    !isPressed && theme.colors.gray_600};

  flex-basis: 50%;
  justify-content: center;
  align-items: center;

  ${({ isPressed, variant, theme }) => {
    if (isPressed) {
      return `background-color: ${
        variant === "primary"
          ? theme.colors.green_light
          : theme.colors.red_light
      };`;
    }
  }}
`;

export const ButtonText = styled.Text`
  gap: 8px;
`;
