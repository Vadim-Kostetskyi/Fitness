import { View, ImageBackground } from "react-native";
import { FC, useState } from "react";
import Button from "@/src/components/Button";
import Exercises from "@/src/components/exercises";
import { activate, deactivate } from "@/src/helpers/focusing";
import ExerciseNames from "@/src/utils/exerciseNames";
import { styles } from "./styles";
import { useTranslation } from "react-i18next";

interface ExerciseScreenLayoutProps {
  backgroundImg: string;
  firstExercise: string;
  secondExercise: string;
  firstExerciseImage: string;
  secondExerciseImage: string;
}

const ExerciseScreenLayout: FC<ExerciseScreenLayoutProps> = ({
  backgroundImg,
  firstExercise,
  secondExercise,
  firstExerciseImage,
  secondExerciseImage,
}) => {
  const [backgroundImage, setBackgroundImage] = useState(
    require(backgroundImg)
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

  const exerciseScreen =
    (isFirstMuscle: boolean, exerciseImage: string) => () => {
      setFirstMuscle(isFirstMuscle);
      setBackgroundImage(require(exerciseImage));
    };

  const firstExerciseScreen = () => {
    setFirstMuscle(true);
    setBackgroundImage(require(firstExerciseImage));
  };

  const secondExerciseScreen = () => {
    setFirstMuscle(false);
    setBackgroundImage(require(secondExerciseImage));
  };

  const addFirstExercise = () => {
    setPropsMuscle1((prevProps) => [...prevProps, exercise]);
    setIsAddNewExercise(false);
    setExercise("");
  };

  const addSecondExercise = () => {
    setPropsMuscle2((prevProps) => [...prevProps, t("newExercise")]);
  };

  const handleAddNewExercise = activate(setIsAddNewExercise);
  const handleCancelNewExercise = deactivate(setIsAddNewExercise);

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View>
        <View style={{ flexDirection: "row" }}>
          <Button
            text={firstExercise}
            styles={styles.muscle}
            func={firstExerciseScreen}
          />
          <Button
            text={secondExercise}
            styles={styles.muscle}
            func={secondExerciseScreen}
          />
        </View>
        {firstMuscle && (
          <Exercises
            exercises={propsMuscle1}
            addExercise={addFirstExercise}
            isAddNewExercise={isAddNewExercise}
            addNewExercise={handleAddNewExercise}
            cancelNewExercise={handleCancelNewExercise}
            exercise={exercise}
            setExercise={setExercise}
          />
        )}
        {!firstMuscle && (
          <Exercises exercises={propsMuscle2} addExercise={addSecondExercise} />
        )}
      </View>
    </ImageBackground>
  );
};

export default ExerciseScreenLayout;
