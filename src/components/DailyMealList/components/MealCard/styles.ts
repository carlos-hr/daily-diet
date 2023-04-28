import styled from "styled-components/native";

export const Container = styled.Pressable`
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.colors.gray_500};
  border-radius: 6px;
  height: 49px;
  align-items: center;
  padding: 12px;
  justify-content: space-between;
  gap: 6px;
`;

export const MealHourText = styled.Text`
  font-size: ${({ theme }) => theme.font_size.xxs};
  font-family: ${({ theme }) => theme.font_family.bold};
`;

export const MealTextContainer = styled.View`
  flex: 1;
  padding-left: 6px;
  border-left-width: 1px;
  border-left-color: ${({ theme }) => theme.colors.gray_400};
`;

export const MealText = styled.Text`
  font-size: ${({ theme }) => theme.font_size.sm};
  font-family: ${({ theme }) => theme.font_family.regular};
`;
