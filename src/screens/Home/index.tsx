import { Container, LogoContainer } from "./styles";
import { Image } from "react-native";
import logo from "@assets/logo.png";

export function Home() {
  return (
    <Container>
      <LogoContainer>
        <Image source={logo} />
      </LogoContainer>
    </Container>
  );
}
