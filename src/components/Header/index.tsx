import { ArrowLeft } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { Container, HeaderStyleProps, OptionalContent } from "./styles";

interface HeaderProps {
  showBackButton?: boolean;
  type?: HeaderStyleProps;
  Content?: React.FC;
}

export function Header(props: HeaderProps) {
  const { Content, showBackButton = false, type = "secondary" } = props;
  const { colors } = useTheme();

  function getIconColor() {
    if (type === "primary") {
      return colors.green_dark;
    } else if (type === "secondary") {
      return colors.red_dark;
    } else {
      return colors.gray_700;
    }
  }

  return (
    <Container type={type}>
      {showBackButton && <ArrowLeft size={30} color={getIconColor()} />}
      <OptionalContent>{Content && <Content />}</OptionalContent>
    </Container>
  );
}
