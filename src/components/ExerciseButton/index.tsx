import { FC, useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import QuantityIndication from "../QuantityIndication";
import { styles } from "./styles";

interface ExerciseButtonProps {
  memoryExercises: [];
  exercise: string;
}

const ExerciseButton: FC<ExerciseButtonProps> = ({
  memoryExercises,
  exercise,
}) => {
  const [isSort, setIsSort] = useState(true);

  const approaches: string[] = memoryExercises[exercise][0];
  const weights: string[] = memoryExercises[exercise][1];

  const onShort = () => {
    setIsSort(!isSort);
  };

  return isSort ? (
    <TouchableOpacity onPress={onShort} style={styles.wrapper}>
      {/* <View style={{ width: 65 }}> */}
      <Text style={styles.title}>підходи</Text>
      <View style={styles.box}>
        {approaches.map((approach, index) => (
          <Text style={styles.text} key={index}>
            {approach}
          </Text>
        ))}
        {/* </View> */}
      </View>
    </TouchableOpacity>
  ) : (
    <QuantityIndication
      approaches={approaches}
      weights={weights}
      onPress={onShort}
    />
  );
};

export default ExerciseButton;
