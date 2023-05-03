import { TextInputProps } from "react-native";
import {
  Container,
  StyledInput,
  InputLabel,
  InputSizes,
  IconContainer,
} from "./styles";
import { Masks } from "react-native-mask-input";

interface InputProps extends TextInputProps {
  label?: string;
  size?: InputSizes;
  fullWidth?: boolean;
  icon?: JSX.Element;
  iconFunction?: () => void;
  hasMask?: boolean;
  timeMask?: boolean;
}

export function Input({
  label,
  size = "sm",
  fullWidth = true,
  icon,
  iconFunction,
  hasMask = false,
  timeMask = false,
  ...rest
}: InputProps) {
  const mask = timeMask
    ? [/[0-2]/, /\d/, ":", /[0-5]/, /\d/]
    : Masks.DATE_DDMMYYYY;

  return (
    <Container fullWidth={fullWidth}>
      {label && <InputLabel>{label}</InputLabel>}

      {hasMask ? (
        <StyledInput {...rest} size={size} mask={mask} />
      ) : (
        <StyledInput {...rest} size={size} />
      )}
      {icon && <IconContainer onPress={iconFunction}>{icon}</IconContainer>}
    </Container>
  );
}
