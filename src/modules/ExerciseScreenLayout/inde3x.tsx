import { View, ImageBackground } from "react-native";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "@/src/components/Button";
import Exercises from "@/src/components/exercises";
import { activate, deactivate } from "@/src/helpers/focusing";
import ExerciseNames from "@/src/utils/exerciseNames";
import { styles } from "./styles";

const BicepsBackScreen = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    require("../../../../assets/images/biceps.jpg")
  );
  const [firstMuscle, setFirstMuscle] = useState(true);
  const [isAddNewExercise, setIsAddNewExercise] = useState(false);
  const [exercise, setExercise] = useState("");

  const [bicepsExercises, backExercises] = ExerciseNames();

  const [propsMuscle1, setPropsMuscle1] = useState(
    Object.values(bicepsExercises)
  );
  const [propsMuscle2, setPropsMuscle2] = useState(
    Object.values(backExercises)
  );

  const { t } = useTranslation();

  const bicepsScreen = () => {
    setFirstMuscle(true);
    setBackgroundImage(require("../../../../assets/images/biceps.jpg"));
  };

  const backScreen = () => {
    setFirstMuscle(false);
    setBackgroundImage(require("../../../../assets/images/back.jpg"));
  };

  const addExercise1 = () => {
    setPropsMuscle1((prevProps) => [...prevProps, exercise]);
    setIsAddNewExercise(false);
    setExercise("");
  };

  const addExercise2 = () => {
    setPropsMuscle2((prevProps) => [...prevProps, t("newExercise")]);
  };

  const handleAddNewExercise = activate(setIsAddNewExercise);
  const handleCancelNewExercise = deactivate(setIsAddNewExercise);

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View>
        <View style={{ flexDirection: "row" }}>
          <Button
            text={t("muscles.biceps")}
            styles={styles.muscle}
            func={bicepsScreen}
          />
          <Button
            text={t("muscles.back")}
            styles={styles.muscle}
            func={backScreen}
          />
        </View>
        {firstMuscle && (
          <Exercises
            exercises={propsMuscle1}
            addExercise={addExercise1}
            isAddNewExercise={isAddNewExercise}
            addNewExercise={handleAddNewExercise}
            cancelNewExercise={handleCancelNewExercise}
            exercise={exercise}
            setExercise={setExercise}
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
