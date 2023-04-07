import { Header } from "@components/Header";
import { HighlightCard } from "@components/HighlightCard";
import { View } from "react-native";
import { Container, GridStat, StatsContainer, Title } from "./styles";

export function Statistics() {
  return (
    <Container>
      <Header
        type="primary"
        showBackButton
        Content={() => (
          <View style={{ marginTop: 24 }}>
            <HighlightCard
              highlightText="das refeições dentro da dieta"
              highlightData={"90%"}
              type="positive"
            />
          </View>
        )}
      />
      <StatsContainer>
        <Title>Estatísticas gerais</Title>

        <HighlightCard
          highlightText="melhor sequência de pratos dentro da dieta"
          highlightData={"90"}
          type="neutral"
        />
        <HighlightCard
          highlightText="refeições registradas"
          highlightData={"109"}
          type="neutral"
        />

        <GridStat>
          <HighlightCard
            highlightText="refeições dentro da dieta"
            highlightData={"90"}
            type="positive"
            fullWidth={false}
          />

          <HighlightCard
            highlightText="refeições fora da dieta"
            highlightData={"90"}
            type="negative"
            fullWidth={false}
          />
        </GridStat>
      </StatsContainer>
    </Container>
  );
}
