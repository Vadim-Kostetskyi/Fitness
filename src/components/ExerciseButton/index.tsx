import { FC, useState } from "react";
import { Button } from "react-native";
import QuantityIndication from "../QuantityIndication";

interface ExerciseButtonProps {
  memoryExercises: [];
}

const ExerciseButton: FC<ExerciseButtonProps> = ({ memoryExercises }) => {
  const [isSort, setIsSort] = useState(true);

  const onShort = () => {
    setIsSort(!isSort);
  };
  return isSort ? (
    <Button title="" onPress={onShort} />
  ) : (
    <QuantityIndication
      approaches={memoryExercises.length ? memoryExercises[el][0] : []}
      weights={memoryExercises.length ? memoryExercises[el][1] : []}
      onPress={onShort}
    />
  );
};

export default ExerciseButton;
