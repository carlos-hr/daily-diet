import styled from "styled-components/native";
import { TextInput } from "react-native";
import MaskInput from "react-native-mask-input";

export type InputSizes = "sm" | "lg";

interface StyleProps {
  size: InputSizes;
}

interface ContainerStyleProps {
  fullWidth: boolean;
}

export const Container = styled.View<ContainerStyleProps>`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "48.5%")};
  gap: 4px;
`;

export const InputLabel = styled.Text`
  font-size: ${({ theme }) => theme.font_size.xs};
  font-family: ${({ theme }) => theme.font_family.bold};
`;

export const StyledInput = styled(MaskInput)<StyleProps>`
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.gray_500};
  min-height: ${({ size }) => (size === "sm" ? "48px" : "120px")};
  padding: 8px;
  vertical-align: ${({ size }) => (size === "lg" ? "top" : "middle")};
  position: relative;
`;

export const IconContainer = styled.Pressable`
  position: absolute;
  top: 45%;
  right: 5%;
`;
