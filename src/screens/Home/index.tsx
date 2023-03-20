import { View } from "react-native";
import styled from "styled-components/native";

export function Home() {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Title>Initial Setup</Title>
    </View>
  );
}
const Title = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold};
`;
