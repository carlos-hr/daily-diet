import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { HighlightCard } from "@components/HighlightCard";
import { MealForm } from "@components/MealForm";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Container, HeaderText } from "./styles";

export function EditMeal() {
  const { navigate } = useNavigation();

  return (
    <View style={{ height: "100%" }}>
      <Header type="tertiary" showBackButton>
        <HighlightCard type="neutral">
          <HeaderText>Editar refeição</HeaderText>
        </HighlightCard>
      </Header>

      <Container>
        <MealForm />

        <Button
          buttonText="Salvar alterações"
          variant="primary"
          onPress={() => navigate("feedback", { type: "offDiet" })}
        />
      </Container>
    </View>
  );
}
