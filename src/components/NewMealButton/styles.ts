import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 48px;
  gap: 8px;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.gray_100};
  height: 50px;
  border-radius: 6px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
`;
