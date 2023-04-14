import { Header } from "@components/Header";
import { HighlightCard } from "@components/HighlightCard";
import { Text } from "react-native";
import { Container, HeaderText, NewMealFormContainer } from "./styles";

export function NewMeal() {
  return (
    <Container>
      <Header type="tertiary" showBackButton>
        <HighlightCard type="neutral">
          <HeaderText>Nova refeição</HeaderText>
        </HighlightCard>
      </Header>

      <NewMealFormContainer></NewMealFormContainer>
    </Container>
  );
}
