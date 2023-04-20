import { Header } from "@components/Header";
import { HighlightCard } from "@components/HighlightCard";
import { Input } from "@components/Input";
import {
  Container,
  TwoColumnsContainer,
  HeaderText,
  NewMealFormContainer,
} from "./styles";

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

        <Input label="Descrição" size="lg" />

        <TwoColumnsContainer>
          <Input label="Data" style={{ width: "50%" }} />
          <Input label="Hora" style={{ width: "50%" }} />
        </TwoColumnsContainer>

        <TwoColumnsContainer></TwoColumnsContainer>
      </NewMealFormContainer>
    </Container>
  );
}
