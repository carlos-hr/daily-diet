import { Header } from "@components/Header";
import { HighlightCard } from "@components/HighlightCard";
import { Text } from "react-native";
import { Container, HeaderTextContainer } from "./styles";

export function NewMeal() {
  return (
    <Container>
      <Header type="tertiary" showBackButton>
        <HeaderTextContainer>
          <HighlightCard type="neutral">
            <Text>Nova refeição</Text>
          </HighlightCard>
        </HeaderTextContainer>
      </Header>
    </Container>
  );
}
