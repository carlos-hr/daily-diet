import { Container, ButtonText, ButtonVariants } from "./styles";

interface ButtonProps {
  Icon?: JSX.Element;
  buttonText: string;
  variant?: ButtonVariants;
}

export function Button({
  Icon,
  buttonText,
  variant = "secondary",
}: ButtonProps) {
  return (
    <Container variant={variant}>
      {Icon}

      <ButtonText variant={variant}>{buttonText}</ButtonText>
    </Container>
  );
}
