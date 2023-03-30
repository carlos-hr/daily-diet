import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
`;

export const LogoContainer = styled.View`
  align-items: center;
`;

export const NewMealContainer = styled.View`
  gap: 12px;
  margin-top: 40px;
`;

export const MealsList = styled.View`
  margin-top: 40px;
`;
