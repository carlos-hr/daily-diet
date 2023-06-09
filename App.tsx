import { Loading } from "@components/Loading";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import { StatusBar } from "react-native";
import { Routes } from "./src/routes";
import { ThemeProvider } from "styled-components/native";
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

      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
