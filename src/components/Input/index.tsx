import { TextInputProps } from "react-native";
import { Container, StyledInput, InputLabel, InputSizes } from "./styles";

interface InputProps extends TextInputProps {
  label?: string;
  size?: InputSizes;
  fullWidth?: boolean;
}

export function Input({
  label,
  size = "sm",
  fullWidth = true,
  ...rest
}: InputProps) {
  return (
    <Container fullWidth={fullWidth}>
      {label && <InputLabel>{label}</InputLabel>}
      <StyledInput {...rest} size={size} />
    </Container>
  );
}
