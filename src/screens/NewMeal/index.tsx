import { Header } from "@components/Header";
import { HighlightCard } from "@components/HighlightCard";
import { Container, HeaderTextContainer } from "./styles";

export function NewMeal() {
  return (
    <Container>
      <Header type="tertiary" showBackButton>
        <HeaderTextContainer>
          <HighlightCard highlightText="Nova refeição" type="neutral" />
        </HeaderTextContainer>
      </Header>
    </Container>
  );
}
