import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { HighlightCard } from "@components/HighlightCard";
import { MealForm } from "@components/MealForm";
import { View } from "react-native";
import { HeaderText } from "./styles";

export function NewMeal() {
  return (
    <View style={{ height: "100%" }}>
      <Header type="tertiary" showBackButton>
        <HighlightCard type="neutral">
          <HeaderText>Nova refeição</HeaderText>
        </HighlightCard>
      </Header>

      <MealForm />
    </View>
  );
}
