import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { HighlightCard } from "@components/HighlightCard";
import { Circle, PencilSimpleLine, Trash } from "phosphor-react-native";
import { View, Text } from "react-native";
import { useTheme } from "styled-components/native";

export function MealDetails() {
  const { colors } = useTheme();
  const meal = {
    day: "12/08/2022",
    hour: "09:00",
    meal: "Café",
    id: "1-a",
    status: "onDiet",
    description:
      "Sanduíche de pão integral com atum e salada de alface e tomate",
  };

  return (
    <View>
      <Header>
        <HighlightCard type="positive">
          <Text>Refeição</Text>
        </HighlightCard>
      </Header>

      <View>
        <View>
          <Text>{meal.meal}</Text>
          <Text>{meal.description}</Text>
        </View>

        <View>
          <Text>Data e hora</Text>
          <Text>
            {meal.day} às {meal.hour}
          </Text>
        </View>

        <View>
          <Circle color={colors.green_dark} weight="fill" size={8} />
          <Text>Dentro da dieta</Text>
        </View>
      </View>

      <View>
        <Button buttonText="Editar refeição" Icon={<Trash weight="fill" />} />
        <Button
          buttonText="Excluir refeição"
          variant="secondary"
          Icon={<PencilSimpleLine weight="light" />}
        />
      </View>
    </View>
  );
}
