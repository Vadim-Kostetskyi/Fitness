import { View, ImageBackground } from "react-native";
import Button from "../../components/Button";
import { buttonsDataTrainingScreen } from "./data";
import { styles } from "./styles";

const TrainingScreen = () => (
  <ImageBackground
    source={require("../../../assets/images/training.jpg")}
    style={styles.background}
  >
    <View style={{ alignItems: "center", paddingTop: 250 }}>
      {buttonsDataTrainingScreen.map(({ text, screen, styles }) => (
        <Button text={text} screen={screen} styles={styles} />
      ))}
    </View>
  </ImageBackground>
);

export default TrainingScreen;
