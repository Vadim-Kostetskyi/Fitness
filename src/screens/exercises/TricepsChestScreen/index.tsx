import { View, ImageBackground } from "react-native";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "@/src/components/Button";
import Exercises from "@/src/components/exercises";
import { activate, deactivate } from "@/src/helpers/focusing";
import ExerciseNames from "@/src/utils/exerciseNames";
import ExerciseScreenLayout from "@/src/modules/ExerciseScreenLayout";

const BicepsBackScreen = () => {
  const { t } = useTranslation();

  return (
    <ExerciseScreenLayout
      backgroundImg={"../../../../assets/images/biceps.jpg"}
      firstExercise={t("muscles.biceps")}
      secondExercise={t("muscles.back")}
      firstExerciseImage="../../../../assets/images/biceps.jpg"
      secondExerciseImage="../../../../assets/images/back.jpg"
    />
  );
};

export default BicepsBackScreen;
