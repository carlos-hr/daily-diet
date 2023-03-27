import styled from "styled-components/native";

export type StatisticsStylesProps = "achieved" | "fail";

interface Props {
  type: StatisticsStylesProps;
}

export const Container = styled.View<Props>`
  background-color: ${({ theme, type }) =>
    type === "achieved" ? theme.colors.green_light : theme.colors.red_light};
  height: 120px;
  border-radius: 8px;
  flex-direction: row;
  margin-top: 48px;
  position: relative;
`;

export const MealsTextContainer = styled.View`
  gap: 8px;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const MealsPercentage = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.xl};
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.font_family.regular};
  font-size: ${({ theme }) => theme.font_size.xs};
`;

export const IconContainer = styled.Pressable`
  justify-self: flex-end;
  position: absolute;
  right: 8px;
  top: 8px;
`;
