import styled from "styled-components/native";

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
  padding: 24px;
  padding-bottom: 24px;
`;

export const MealDataContainer = styled.View`
  gap: 24px;
  margin-top: 28px;
`;

export const MealDetailsContainer = styled.View`
  gap: 8px;
`;

export const MealName = styled.Text`
  font-size: ${({ theme }) => theme.font_size.md};
  font-family: ${({ theme }) => theme.font_family.bold};
`;

export const MealDescription = styled.Text`
  font-size: ${({ theme }) => theme.font_size.sm};
  font-family: ${({ theme }) => theme.font_family.regular};
`;

export const MealDateAndTimeTitle = styled.Text`
  font-size: ${({ theme }) => theme.font_size.xs};
  font-family: ${({ theme }) => theme.font_family.bold};
`;

export const MealDateAndTimeText = styled.Text`
  font-size: ${({ theme }) => theme.font_size.sm};
  font-family: ${({ theme }) => theme.font_family.regular};
`;

export const MealBadge = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.gray_600};
  width: 140px;
  border-radius: 999px;
  padding: 8px;
`;

export const ButtonContainer = styled.View`
  gap: 8px;
`;
