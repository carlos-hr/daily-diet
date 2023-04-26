import styled from "styled-components/native";

export type ButtonVariants = "primary" | "secondary";

interface ButtonStyleProps {
  isPressed: boolean;
  variant: ButtonVariants;
}

export const HeaderText = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold};
`;

export const Container = styled.View`
  z-index: 1;
  margin-top: 12px;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  background-color: ${({ theme }) => theme.colors.gray_700};
  justify-content: space-between;
  flex: 1;
  padding: 12px;
  padding-bottom: 24px;
`;

export const NewMealFormContainer = styled.View`
  padding-top: 36px;
  gap: 24px;
`;

export const TwoColumnsContainer = styled.View`
  flex-direction: row;
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

  width: 48.5%;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  flex-direction: row;
  gap: 8px;

  ${({ isPressed, variant, theme }) => {
    if (isPressed) {
      return `
      background-color: ${
        variant === "primary"
          ? theme.colors.green_light
          : theme.colors.red_light
      };
      border: 0.5px solid ${
        variant === "primary" ? theme.colors.green_dark : theme.colors.red_dark
      };
      `;
    }
  }};
`;

export const ButtonText = styled.Text`
  font-size: ${({ theme }) => theme.font_size.xs};
  font-family: ${({ theme }) => theme.font_family.bold};
`;
