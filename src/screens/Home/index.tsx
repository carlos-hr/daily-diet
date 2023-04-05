import {
  Container,
  DailyMealContainer,
  LogoContainer,
  MealDay,
  NewMealContainer,
} from "./styles";
import { Image, Text, FlatList, View } from "react-native";
import { HighlightCard } from "@components/HighlightCard";
import logo from "@assets/logo.png";
import { Button } from "@components/Button";
import { Plus } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { Meals, DailyMealList } from "@components/DailyMealList";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const { colors } = useTheme();
  const mealsData: Meals[] = [
    {
      id: "1",
      day: "12.08.22",
      meals: [
        {
          hour: "09:00",
          meal: "Café",
          id: "1-a",
          status: "onDiet",
        },
        {
          hour: "12:00",
          meal: "Almoço",
          status: "onDiet",
          id: "2",
        },
        {
          hour: "16:00",
          meal: "Whey",
          status: "onDiet",
          id: "3",
        },
        {
          hour: "20:00",
          meal: "X-tudo",
          status: "offDiet",
          id: "4",
        },
      ],
    },
    {
      id: "2",
      day: "11.08.22",
      meals: [
        {
          hour: "09:00",
          meal: "Café",
          status: "onDiet",
          id: "1",
        },
        {
          hour: "12:00",
          meal: "Almoço",
          status: "onDiet",
          id: "2",
        },
        {
          hour: "16:00",
          meal: "Whey",
          status: "onDiet",
          id: "3",
        },
        {
          hour: "20:00",
          meal: "X-tudo",
          status: "offDiet",
          id: "4",
        },
      ],
    },
  ];

  const navigation = useNavigation();

  function navigateToStatistics() {
    navigation.navigate("statistics");
  }

  return (
    <Container>
      <LogoContainer>
        <Image source={logo} />
      </LogoContainer>

      <HighlightCard
        type="positive"
        highlightData="90%"
        highlightText="das refeições dentro da dieta"
        showDetailsButton
        onPress={navigateToStatistics}
      />

      <NewMealContainer>
        <Text>Refeições</Text>

        <Button
          buttonText="Nova refeição"
          Icon={<Plus color={colors.gray_500} size={20} weight="bold" />}
          variant="primary"
        />
      </NewMealContainer>

      {mealsData && (
        <FlatList
          style={{ marginTop: 32 }}
          data={mealsData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <DailyMealContainer>
              <MealDay>{item.day}</MealDay>
              <DailyMealList meals={item.meals} />
            </DailyMealContainer>
          )}
          ListEmptyComponent={() => (
            <Text>Que tal cadastrar a primeira turma?</Text>
          )}
        />
      )}
    </Container>
  );
}
