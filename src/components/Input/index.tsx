import { TextInputProps } from "react-native";
import { Container, StyledInput, InputLabel, InputSizes } from "./styles";

interface InputProps extends TextInputProps {
  label?: string;
  size?: InputSizes;
}

export function Input({ label, size = "sm", ...rest }: InputProps) {
  return (
    <Container>
      {label && <InputLabel>{label}</InputLabel>}
      <StyledInput {...rest} size={size} />
    </Container>
  );
}
