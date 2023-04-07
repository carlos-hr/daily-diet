import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "phosphor-react-native";
import { Pressable } from "react-native";
import { useTheme } from "styled-components/native";
import { Container, HeaderStyleProps, OptionalContent } from "./styles";

interface HeaderProps {
  type?: HeaderStyleProps;
  Content?: React.FC;
  showBackButton?: boolean;
}

export function Header(props: HeaderProps) {
  const { Content, showBackButton = false, type = "secondary" } = props;
  const { colors } = useTheme();
  const { navigate } = useNavigation();

  function getIconColor() {
    if (type === "primary") {
      return colors.green_dark;
    } else if (type === "secondary") {
      return colors.red_dark;
    } else {
      return colors.gray_700;
    }
  }

  function goBack() {
    navigate("home");
  }
  return (
    <Container type={type}>
      {showBackButton && (
        <Pressable onPress={goBack}>
          <ArrowLeft size={30} color={getIconColor()} />
        </Pressable>
      )}
      <OptionalContent>{Content && <Content />}</OptionalContent>
    </Container>
  );
}
