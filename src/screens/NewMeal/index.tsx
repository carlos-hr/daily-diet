import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { HighlightCard } from "@components/HighlightCard";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { Circle } from "phosphor-react-native";
import { useState } from "react";
import { View } from "react-native";
import { useTheme } from "styled-components/native";
import {
  Container,
  TwoColumnsContainer,
  HeaderText,
  NewMealFormContainer,
  DietButton,
  ButtonText,
} from "./styles";
import { MealType } from "./types";

export function NewMeal() {
  const { colors } = useTheme();
  const { navigate } = useNavigation();

  const [mealType, setMealType] = useState<MealType | null>(null);

  return (
    <View style={{ height: "100%" }}>
      <Header type="tertiary" showBackButton>
        <HighlightCard type="neutral">
          <HeaderText>Nova refeição</HeaderText>
        </HighlightCard>
      </Header>

      <Container>
        <NewMealFormContainer>
          <Input label="Nome" placeholder="Nome da refeição" />

          <Input
            label="Descrição"
            size="lg"
            placeholder="Detalhes da refeição"
          />

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
        {mealType && (
          <Button
            buttonText="Cadastrar refeição"
            variant="primary"
            onPress={() => navigate("feedback", { type: mealType })}
          />
        )}
      </Container>
    </View>
  );
}
