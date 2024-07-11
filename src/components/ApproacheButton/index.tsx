import { TouchableOpacity, Text } from "react-native";
import { Dispatch, FC } from "react";
import { styles } from "./styles";

interface ApproachButtonProps {
  chooseExercise: () => void;
  digit: string;
  disable?: boolean;
  done?: boolean;
  longPress?: () => void;
  focus?: () => void;
  blur?: () => void;
  isFocused?: boolean;
  quantity: any;
  index: any;
  add?: () => void;
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
  add,
}) => {
  console.log(5656);

  console.log("digit", digit);

  return (
    <TouchableOpacity
      style={[
        styles.approach,
        done && styles.done,
        isFocused && styles.focused,
      ]}
      onFocus={focus}
      onBlur={blur}
      activeOpacity={done ? 1 : 0.2}
      onPress={add ? add : done ? undefined : chooseExercise}
      disabled={disable}
      onLongPress={done ? longPress : undefined}
    >
      <Text style={styles.text}>{digit}</Text>
    </TouchableOpacity>
  );
};

export default ApproachButton;
