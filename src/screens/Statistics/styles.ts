import styled from "styled-components/native";

export const Container = styled.View``;

export const StatsContainer = styled.View`
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  margin-top: -10px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray_700};
  z-index: 1;
  padding: 24px;
  gap: 12px;
`;

export const GridStat = styled.View`
  flex-direction: row;
  gap: 12px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.xs};
  color: ${({ theme }) => theme.colors.gray_100};
  text-align: center;
`;
