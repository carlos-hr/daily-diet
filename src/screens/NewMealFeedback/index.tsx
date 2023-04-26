import { Container, PageDescription, PageTitle } from "./styles";
import { Image, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MealType } from "./types";
import positiveFeedback from "@assets/positive-feedback.png";
import negativeFeedback from "@assets/negative-feedback.png";
import { Button } from "@components/Button";

type RouteParams = {
  type: MealType;
};

export function NewMealFeedback() {
  const { params } = useRoute();
  const { navigate } = useNavigation();

  const { type } = params as RouteParams;

  const feedbackImage = type === "onDiet" ? positiveFeedback : negativeFeedback;
  const pageTitle = type === "onDiet" ? "Continue assim!" : "Que pena!";
  const pageDescription =
    type === "onDiet"
      ? "Você continua dentro da dieta. Muito bem!"
      : "Você saiu da dieta dessa vez, mas continue se esforçando e não desista!";

  return (
    <Container>
      <View style={{ alignItems: "center", gap: 8 }}>
        <PageTitle type={type}>{pageTitle}</PageTitle>
        <PageDescription>{pageDescription}</PageDescription>
      </View>
      <Image source={feedbackImage} />
      <Button
        buttonText="Ir para página inicial"
        style={{ width: 200 }}
        onPress={() => navigate("home")}
      />
    </Container>
  );
}
