import { Header } from "@components/Header";
import { HighlightCard } from "@components/HighlightCard";
import { Input } from "@components/Input";
import { Circle } from "phosphor-react-native";
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
    <Container>
      <Header type="tertiary" showBackButton>
        <HighlightCard type="neutral">
          <HeaderText>Nova refeição</HeaderText>
        </HighlightCard>
      </Header>

      <NewMealFormContainer>
        <Input label="Nome" />

        <Input label="Descrição" size="lg" />

        <TwoColumnsContainer>
          <Input label="Data" fullWidth={false} />
          <Input label="Hora" fullWidth={false} />
        </TwoColumnsContainer>

        <TwoColumnsContainer>
          <DietButton isPressed={true} variant="primary">
            <ButtonText>
              <Circle color={colors.green_dark} weight="fill" size={8} />
              Sim
            </ButtonText>
          </DietButton>

          <DietButton isPressed={true} variant="secondary">
            <ButtonText>
              <Circle color={colors.red_dark} weight="fill" size={8} />
              Não
            </ButtonText>
          </DietButton>
        </TwoColumnsContainer>
      </NewMealFormContainer>
    </Container>
  );
}
