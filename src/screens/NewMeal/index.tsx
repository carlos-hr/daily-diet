import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { HighlightCard } from "@components/HighlightCard";
import { Input } from "@components/Input";
import { Circle } from "phosphor-react-native";
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

export function NewMeal() {
  const { colors } = useTheme();

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
            <DietButton isPressed variant="primary">
              <Circle color={colors.green_dark} weight="fill" size={8} />
              <ButtonText>Sim</ButtonText>
            </DietButton>

            <DietButton isPressed variant="secondary">
              <Circle color={colors.red_dark} weight="fill" size={8} />
              <ButtonText>Não</ButtonText>
            </DietButton>
          </TwoColumnsContainer>
        </NewMealFormContainer>
        <Button buttonText="Cadastrar refeição" variant="primary" />
      </Container>
    </View>
  );
}
