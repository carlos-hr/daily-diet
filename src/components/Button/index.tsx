import { TouchableOpacityProps } from "react-native";
import { Container, ButtonText, ButtonVariants } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  Icon?: JSX.Element;
  buttonText: string;
  variant?: ButtonVariants;
}

export function Button({
  Icon,
  buttonText,
  variant = "primary",
  ...rest
}: ButtonProps) {
  return (
    <Container variant={variant} {...rest}>
      {Icon}

      <ButtonText variant={variant}>{buttonText}</ButtonText>
    </Container>
  );
}
