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
            <HighlightCard numberStat={"90%"} type="positive" />
          </View>
        )}
      />
      <StatsContainer>
        <Title>Estatísticas gerais</Title>

        <HighlightCard numberStat={"90"} type="neutral" />
        <HighlightCard numberStat={"109"} type="neutral" />

        <GridStat>
          <HighlightCard numberStat={"90"} type="positive" fullWidth={false} />

          <HighlightCard numberStat={"90"} type="negative" fullWidth={false} />
        </GridStat>
      </StatsContainer>
    </Container>
  );
}
