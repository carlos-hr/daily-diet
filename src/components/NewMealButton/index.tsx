import { Plus } from "phosphor-react-native";
import { Button, ButtonText, Container } from "./styles";
import { useTheme } from "styled-components/native";
import { Text } from "react-native";

export function NewMealButton() {
  const { colors } = useTheme();

  return (
    <Container>
      <Text>Refeições</Text>

      <Button>
        <Plus color={colors.gray_500} />

        <ButtonText>Nova Refeição</ButtonText>
      </Button>
    </Container>
  );
}
