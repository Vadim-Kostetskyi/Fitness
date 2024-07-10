import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles";
import { FC } from "react";

interface QuantityIndicationProps {
  approaches: string[];
  weights: string[];
  onPress: () => void;
}

const QuantityIndication: FC<QuantityIndicationProps> = ({
  approaches,
  weights,
  onPress,
}) => (
  <TouchableOpacity
    style={[
      styles.exerciseNumber,
      // done && { backgroundColor: "#5CFB44", borderWidth: 0 },
    ]}
    onPress={onPress}
  >
    <View style={{ marginRight: 25 }}>
      <Text style={styles.text}>разів</Text>
      {approaches.map((approach, index) => (
        <Text style={styles.text} key={index}>
          {approach}
        </Text>
      ))}
    </View>
    <View>
      <Text style={styles.text}>кг</Text>
      {weights.map((weight, index) => (
        <Text style={styles.text} key={index}>
          {weight}
        </Text>
      ))}
    </View>
  </TouchableOpacity>
);

export default QuantityIndication;
