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
