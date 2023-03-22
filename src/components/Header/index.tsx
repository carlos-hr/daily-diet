import { View, Text } from "react-native";
import { CaretLeft } from "phosphor-react-native";
import { Container, HeaderStyleProps } from "./styles";

interface HeaderProps {
  showBackButton?: boolean;
  type?: HeaderStyleProps;
  title?: string;
}

export function Header(props: HeaderProps) {
  const { title, showBackButton = false, type = "tertiary" } = props;

  return (
    <Container type={type}>
      {showBackButton && <CaretLeft size={30} />}
      {/* {title && <Text>{title}</Text>} */}
      <Text>E aee rapeize</Text>
    </Container>
  );
}
