import { Header } from "@components/Header";
import { HighlightCard } from "@components/HighlightCard";
import { Container, HeaderTextContainer } from "./styles";

export function NewMeal() {
  return (
    <Container>
      <Header
        type="tertiary"
        showBackButton
        Content={() => (
          <HeaderTextContainer>
            <HighlightCard highlightText="Nova " type="neutral" />
          </HeaderTextContainer>
        )}
      />
    </Container>
  );
}
