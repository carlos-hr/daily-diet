import { Header } from "@components/Header";
import { HighlightCard } from "@components/HighlightCard";
import { View } from "react-native";
import { Container, GridStat, StatsContainer, Title } from "./styles";
import { useCallback, useState } from "react";
import { Stats } from "src/@types/meal";
import { useFocusEffect } from "@react-navigation/native";
import { getMealStats } from "@storage/meal/getMealStats";

export function Statistics() {
  const [mealStats, setMealStats] = useState<Stats | null>(null);

  const mealHighlight = mealStats
    ? ((mealStats.totalOnDiet / mealStats.total) * 100).toFixed(1)
    : null;

  const fetchStats = async () => {
    const stats = await getMealStats();
    setMealStats(stats);
  };

  useFocusEffect(
    useCallback(() => {
      fetchStats();
    }, [])
  );

  return (
    mealStats && (
      <Container>
        <Header type="primary" variant="long" showBackButton>
          <View style={{ marginTop: 24 }}>
            <HighlightCard
              highlightText="das refeições dentro da dieta"
              highlightData={`${mealHighlight}%`}
              type="positive"
            />
          </View>
        </Header>
        <StatsContainer>
          <Title>Estatísticas gerais</Title>

          <HighlightCard
            highlightText="melhor sequência de pratos dentro da dieta"
            highlightData={mealStats.bestSequence}
            type="neutral"
          />
          <HighlightCard
            highlightText="refeições registradas"
            highlightData={mealStats.total}
            type="neutral"
          />

          <GridStat>
            <HighlightCard
              highlightText="refeições dentro da dieta"
              highlightData={mealStats.totalOnDiet}
              type="positive"
              fullWidth={false}
            />

            <HighlightCard
              highlightText="refeições fora da dieta"
              highlightData={mealStats.totalOffDiet}
              type="negative"
              fullWidth={false}
            />
          </GridStat>
        </StatsContainer>
      </Container>
    )
  );
}
