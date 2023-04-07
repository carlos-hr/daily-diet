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

export const DailyMealContainer = styled.View`
  margin-top: 32px;
`;

export const MealDay = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.md};
  margin-bottom: 8px;
`;
