import { Header } from "@components/Header";
import { HighlightCard } from "@components/HighlightCard";
import { Input } from "@components/Input";
import { Container, HeaderText, NewMealFormContainer } from "./styles";

export function NewMeal() {
  return (
    <Container>
      <Header type="tertiary" showBackButton>
        <HighlightCard type="neutral">
          <HeaderText>Nova refeição</HeaderText>
        </HighlightCard>
      </Header>

      <NewMealFormContainer>
        <Input label="Nome" />
      </NewMealFormContainer>
    </Container>
  );
}
