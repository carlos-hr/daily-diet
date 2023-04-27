import { Input } from "@components/Input";
import { Circle } from "phosphor-react-native";
import { useState } from "react";
import { useTheme } from "styled-components/native";
import {
  NewMealFormContainer,
  TwoColumnsContainer,
  DietButton,
  ButtonText,
} from "./styles";
import { MealType } from "./types";

export function MealForm() {
  const { colors } = useTheme();
  const [mealType, setMealType] = useState<MealType | null>(null);

  return (
    <NewMealFormContainer>
      <Input label="Nome" placeholder="Nome da refeição" />

      <Input label="Descrição" size="lg" placeholder="Detalhes da refeição" />

      <TwoColumnsContainer>
        <Input label="Data" fullWidth={false} placeholder="__ /__ /____" />
        <Input label="Hora" fullWidth={false} placeholder="__ : __" />
      </TwoColumnsContainer>

      <TwoColumnsContainer>
        <DietButton
          isPressed={mealType === "onDiet"}
          variant="primary"
          onPress={() => setMealType("onDiet")}
        >
          <Circle color={colors.green_dark} weight="fill" size={8} />
          <ButtonText>Sim</ButtonText>
        </DietButton>

        <DietButton
          isPressed={mealType === "offDiet"}
          variant="secondary"
          onPress={() => setMealType("offDiet")}
        >
          <Circle color={colors.red_dark} weight="fill" size={8} />
          <ButtonText>Não</ButtonText>
        </DietButton>
      </TwoColumnsContainer>
    </NewMealFormContainer>
  );
}
