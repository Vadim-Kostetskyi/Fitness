import ExerciseScreenLayout from "@/src/modules/ExerciseScreenLayout";
import Muscles from "@/src/utils/muscles";
import FirstExerciseImage from "../../../../assets/images/biceps.jpg";
import SecondExerciseImage from "../../../../assets/images/back.jpg";
import BackgroundImage from "../../../../assets/images/biceps.jpg";

const BicepsBackScreen = () => {
  const { biceps, back } = Muscles();

  return (
    <ExerciseScreenLayout
      backgroundImg={BackgroundImage}
      firstExercise={biceps}
      secondExercise={back}
      firstExerciseImage={FirstExerciseImage}
      secondExerciseImage={SecondExerciseImage}
    />
  );
};

export default BicepsBackScreen;
