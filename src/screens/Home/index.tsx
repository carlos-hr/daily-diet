import { Container, LogoContainer } from "./styles";
import { Image } from "react-native";
import { Statistics } from "@components/Statistics";
import logo from "@assets/logo.png";

export function Home() {
  return (
    <Container>
      <LogoContainer>
        <Image source={logo} />
      </LogoContainer>

      <Statistics goal="achieved" percentOfMealsOnDiet={90} />
    </Container>
  );
}
