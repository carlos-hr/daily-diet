import { Header } from "@components/Header";
import { HighlightCard } from "@components/HighlightCard";
import { MealForm } from "@components/MealForm";
import { useRoute } from "@react-navigation/native";
import { View } from "react-native";
import { HeaderText } from "./styles";

interface RouteParams {
  id: string;
  day: string;
}

export function EditMeal() {
  const { params } = useRoute();

  const { day, id } = params as RouteParams;

  return (
    <View style={{ height: "100%" }}>
      <Header type="tertiary" showBackButton>
        <HighlightCard type="neutral">
          <HeaderText>Editar refeição</HeaderText>
        </HighlightCard>
      </Header>

      <MealForm day={day} id={id} submitText="Salvar alterações" />
    </View>
  );
}
