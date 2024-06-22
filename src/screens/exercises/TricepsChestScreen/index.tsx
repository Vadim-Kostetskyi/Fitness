import ExerciseScreenLayout from "@/src/modules/ExerciseScreenLayout";
import Muscles from "@/src/utils/muscles";
import BackgroundImage from "../../../../assets/images/biceps.jpg";
import FirstExerciseImage from "../../../../assets/images/biceps.jpg";
import SecondExerciseImage from "../../../../assets/images/back.jpg";

const TricepsChestScreen = () => {
  const { chest, triceps } = Muscles();

  return (
    <ExerciseScreenLayout
      backgroundImg={BackgroundImage}
      firstExercise={triceps}
      secondExercise={chest}
      firstExerciseImage={FirstExerciseImage}
      secondExerciseImage={SecondExerciseImage}
    />
  );
};

export default TricepsChestScreen;
