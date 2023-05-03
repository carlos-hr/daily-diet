import { Input } from "@components/Input";
import { CalendarCheck, Circle, Clock } from "phosphor-react-native";
import { useCallback, useState } from "react";
import { useTheme } from "styled-components/native";
import {
  NewMealFormContainer,
  TwoColumnsContainer,
  DietButton,
  ButtonText,
  Container,
} from "./styles";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Platform } from "react-native";
import { dateFormatter, timeFormatter } from "@utils/formatter";
import { Button } from "@components/Button";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { findMeal } from "@storage/meal/findMeal";
import { generateId } from "@utils/generic";
import { Meal, MealType } from "src/@types/meal";
import { createMeal } from "@storage/meal/createMeal";

interface MealFormProps {
  id?: string;
  day?: string;
  submitText?: string;
}

export function MealForm({
  id,
  day,
  submitText = "Cadastrar refeição",
}: MealFormProps) {
  const { colors } = useTheme();
  const { navigate } = useNavigation();

  const [mealName, setMealName] = useState("");
  const [mealDescription, setMealDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [mealType, setMealType] = useState<MealType | null>(null);

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const fetchMeal = async (id: string, day: string) => {
    try {
      const { description, hour, name, status } = await findMeal(id, day);
      setMealName(name);
      setDate(day);
      setMealDescription(description);
      setTime(hour);
      setMealType(status);
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      if (id && day) {
        fetchMeal(id, day);
      }
    }, [])
  );

  const handleSaveMeal = async () => {
    if (mealName && date && mealType) {
      const id = generateId();
      const meal: Meal = {
        description: mealDescription,
        hour: time,
        id,
        name: mealName,
        status: mealType,
      };
      try {
        await createMeal(meal, date);
        navigate("feedback", { type: mealType });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleDatePicker = (_: any, selectedDate?: Date) => {
    setShowDatePicker(Platform.OS === "ios");

    const mealDate = dateFormatter(selectedDate);
    setDate(mealDate);
  };

  const handleTimePicker = (_: any, selectedDate?: Date) => {
    setShowTimePicker(Platform.OS === "ios");

    const mealTime = timeFormatter(selectedDate);
    setTime(mealTime);
  };

  const handleDatePickerPress = () => {
    if (showTimePicker) {
      setShowTimePicker(false);
    }

    setShowDatePicker(true);
  };

  const handleTimePickerPress = () => {
    if (showDatePicker) {
      setShowDatePicker(false);
    }

    setShowTimePicker(true);
  };

  return (
    <Container>
      <NewMealFormContainer>
        <Input
          label="Nome"
          placeholder="Nome da refeição"
          onChangeText={setMealName}
          value={mealName}
        />

        <Input
          label="Descrição"
          size="lg"
          placeholder="Detalhes da refeição"
          onChangeText={setMealDescription}
          value={mealDescription}
        />

        <TwoColumnsContainer>
          <Input
            label="Data"
            fullWidth={false}
            placeholder="__ /__ /____"
            iconFunction={handleDatePickerPress}
            value={date}
            onChangeText={setDate}
            icon={<CalendarCheck color={colors.gray_300} />}
            hasMask
          />
          <Input
            label="Hora"
            fullWidth={false}
            placeholder="__ : __"
            value={time}
            onChangeText={setTime}
            icon={<Clock color={colors.gray_300} />}
            iconFunction={handleTimePickerPress}
            hasMask
            timeMask
          />
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

          {showDatePicker && (
            <DateTimePicker
              value={new Date()}
              mode="date"
              onChange={handleDatePicker}
            />
          )}

          {showTimePicker && (
            <DateTimePicker
              value={new Date()}
              mode="time"
              is24Hour={true}
              onChange={handleTimePicker}
            />
          )}
        </TwoColumnsContainer>
      </NewMealFormContainer>

      <Button
        buttonText={submitText}
        variant="primary"
        onPress={handleSaveMeal}
      />
    </Container>
  );
}
