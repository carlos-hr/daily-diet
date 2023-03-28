import { Container, LogoContainer } from "./styles";
import { Image } from "react-native";
import { HighlightCard } from "@components/HighlightCard";
import logo from "@assets/logo.png";
import { NewMealButton } from "@components/NewMealButton";

export function Home() {
  return (
    <Container>
      <LogoContainer>
        <Image source={logo} />
      </LogoContainer>

      <HighlightCard type="positive" percentOfMealsOnDiet={90} />

      <NewMealButton />
    </Container>
  );
}
