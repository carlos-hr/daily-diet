import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/native";
import { Container } from "./styles";

export function Loading() {
  const { colors } = useTheme();

  return (
    <Container>
      <ActivityIndicator color={colors.green_dark} size={50} />
    </Container>
  );
}
