import { useTranslation } from "react-i18next";

function ExerciseNames() {
  const { t } = useTranslation();

  const bicepsExercises = {
    StandingDumbbellPress: t("biceps.standingDumbbellPress"),
    StandingDumbbellPressInside: t("biceps.standingDumbbellPressInside"),
    SeatedDumbbellPress: t("biceps.seatedDumbbellPress"),
  };
  const backExercises = {
    DumbbellPressOnAnInclineBench: t("back.dumbbellPressOnAnInclineBench"),
    DeadliftInTheIncline: t("back.deadliftInTheIncline"),
    Deadlift: t("back.deadlift"),
  };

  return [bicepsExercises, backExercises];
}

export default ExerciseNames;
