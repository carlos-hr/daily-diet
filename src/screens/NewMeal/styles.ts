import styled from "styled-components/native";
import { Text } from "react-native";
import { TextHighlight } from "@components/HighlightCard/styles";

export const Container = styled.View``;

export const HeaderTextContainer = styled.View`
  & > ${TextHighlight} {
    font-size: 20px;
    font-weight: bold;
    color: #000;
  }
`;
