import { View, ImageBackground } from "react-native";
import { useState } from "react";

import Button from "@/src/Authentication/components/Button";
import Exercises from "@/src/Authentication/components/exercises";
import { handleFocus, handleBlur } from "@/src/helpers/focusing";
import ExerciseNames from "../exerciseNames";
import { styles } from "./styles";

const BicepsBackScreen = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    require("../../../../assets/images/biceps.jpg")
  );
  const [firstMuscle, setFirstMuscle] = useState(true);
  const [isAddNewExercise, setIsAddNewExercise] = useState(false);
  const [exercise1, setExercise1] = useState("");
  const [bicepsExercises, backExercises] = ExerciseNames();
  console.log(123);
  console.log(bicepsExercises);

  const [propsMuscle1, setPropsMuscle1] = useState([
    "Прямий жим гантелей стоячи",
    "Жим гантелей стоячи всередину",
    "Жим гантелі сидячи",
  ]);
  const [propsMuscle2, setPropsMuscle2] = useState([
    "Жим гантелі на наклонній скам'ї",
    "Тяга штанги в наклоні",
    "Станова тяга",
  ]);

  const biceps1 = () => {
    setFirstMuscle(true);
    setBackgroundImage(require("../../../../assets/images/biceps.jpg"));
  };

  const back1 = () => {
    setFirstMuscle(false);
    setBackgroundImage(require("../../../../assets/images/back.jpg"));
  };

  const addExercise1 = () => {
    setPropsMuscle1((prevProps) => [...prevProps, exercise1]);
    setIsAddNewExercise(false);
    setExercise1("");
  };

  const addExercise2 = () => {
    setPropsMuscle2((prevProps) => [...prevProps, "Нова вправа"]);
  };

  const addNewExercise1 = () => {
    setIsAddNewExercise(true);
  };

  const addNewExercise2 = handleFocus(setIsAddNewExercise);

  const cancelNewExercise1 = () => {
    setIsAddNewExercise(false);
  };

  const cancelNewExercise2 = handleBlur(setIsAddNewExercise);

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View>
        <View style={{ flexDirection: "row" }}>
          <Button text={"Біцепс"} styles={styles.muscle} func={biceps1} />
          <Button text={"Спина"} styles={styles.muscle} func={back1} />
        </View>
        {firstMuscle && (
          <Exercises
            exercises={propsMuscle1}
            addExercise={addExercise1}
            isAddNewExercise={isAddNewExercise}
            addNewExercise={addNewExercise1}
            cancelNewExercise={cancelNewExercise1}
            exercise={exercise1}
            setExercise={setExercise1}
          />
        )}
        {!firstMuscle && (
          <Exercises exercises={propsMuscle2} addExercise={addExercise2} />
        )}
      </View>
    </ImageBackground>
  );
};

export default BicepsBackScreen;
