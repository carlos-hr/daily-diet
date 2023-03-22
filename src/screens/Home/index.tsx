import { Container, LogoContainer } from "./styles";
import { Image } from "react-native";
import logo from "@assets/logo.png";
import { Header } from "@components/Header";

export function Home() {
  return (
    <Container>
      <Header showBackButton />
      {/* <LogoContainer>
        <Image source={logo} />
      </LogoContainer> */}
    </Container>
  );
}
