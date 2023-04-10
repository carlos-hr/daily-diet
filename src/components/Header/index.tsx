import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "phosphor-react-native";
import { Pressable } from "react-native";
import { useTheme } from "styled-components/native";
import {
  Container,
  HeaderHeightProps,
  HeaderStyleProps,
  OptionalContent,
} from "./styles";

interface HeaderProps {
  type?: HeaderStyleProps;
  variant?: HeaderHeightProps;
  Content?: React.FC;
  showBackButton?: boolean;
}

export function Header(props: React.PropsWithChildren<HeaderProps>) {
  const {
    showBackButton = false,
    type = "secondary",
    variant = "short",
    children,
  } = props;
  const { colors } = useTheme();
  const { navigate } = useNavigation();

  function getIconColor() {
    if (type === "primary") {
      return colors.green_dark;
    } else if (type === "secondary") {
      return colors.red_dark;
    } else {
      return colors.gray_100;
    }
  }

  function goBack() {
    navigate("home");
  }
  return (
    <Container type={type} variant={variant}>
      {showBackButton && (
        <Pressable onPress={goBack}>
          <ArrowLeft size={30} color={getIconColor()} />
        </Pressable>
      )}
      <OptionalContent>{children}</OptionalContent>
    </Container>
  );
}
