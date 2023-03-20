import { Loading } from "@components/Loading";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import { StatusBar, View } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { theme } from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        {fontsLoaded ? <Title>App</Title> : <Loading />}
      </View>
    </ThemeProvider>
  );
}

const Title = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold};
`;
