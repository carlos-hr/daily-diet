import styled from "styled-components/native";
import { MealType } from "./types";

interface PageTitleStyle {
  type: MealType;
}

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 24px;
  row-gap: 24px;
`;

export const PageTitle = styled.Text<PageTitleStyle>`
  font-size: ${({ theme }) => theme.font_size.lg};
  font-family: ${({ theme }) => theme.font_family.bold};
  color: ${({ theme, type }) =>
    type === "onDiet" ? theme.colors.green_dark : theme.colors.red_dark};
`;

export const PageDescription = styled.Text`
  font-size: ${({ theme }) => theme.font_size.sm};
  text-align: center;
`;
