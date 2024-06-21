import { TouchableOpacity, Text } from "react-native";

import { styles } from "./styles";
import { FC } from "react";

interface ApproachButtonProps {
  func: () => void;
  text: string;
  disable?: boolean;
  done?: boolean;
  longPress?: () => void;
  focus?: () => void;
  blur?: () => void;
  isFocused?: boolean;
}

const ApproachButton: FC<ApproachButtonProps> = ({
  func,
  text,
  disable,
  done,
  longPress,
  focus,
  blur,
  isFocused,
}) => {
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
      onPress={!done ? func : undefined}
      disabled={disable}
      onLongPress={longPress}
    >
      <Text style={{ textAlign: "center" }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ApproachButton;
