import { TouchableOpacity, Text } from "react-native";

import { styles } from "../styles";
import { FC } from "react";

interface ApproachButtonProps {
  chooseExercise: () => void;
  digit: number;
  disable?: boolean;
  done?: boolean;
  longPress?: () => void;
  focus?: () => void;
  blur?: () => void;
  isFocused?: boolean;
  quantity: any;
  index: any;
}

const ApproachButton: FC<ApproachButtonProps> = ({
  chooseExercise,
  digit,
  disable,
  done,
  longPress,
  focus,
  blur,
  isFocused,
  quantity,
  index,
}) => {
  console.log(5656);

  console.log(quantity ? quantity[0] : 56);
  console.log(index);
  console.log(disable);

  return (
    <TouchableOpacity
      style={[
        styles.approach,
        styles.center,
        done && { backgroundColor: "#387205" },
        isFocused && { borderColor: "red", borderWidth: 1 },
      ]}
      onFocus={focus}
      onBlur={blur}
      activeOpacity={done ? 1 : 0.2}
      onPress={done ? undefined : chooseExercise}
      disabled={disable}
      onLongPress={done ? longPress : undefined}
    >
      <Text style={{ textAlign: "center" }}>{digit}</Text>
    </TouchableOpacity>
  );
};

export default ApproachButton;
