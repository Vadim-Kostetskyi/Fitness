import React from "react";
import { View, Text, ImageBackground } from "react-native";
import Button from "../../components/Button";
import { buttonsData } from "./data";
import { styles } from "./styles";

const HomeScreen = () => (
  <ImageBackground
    source={require("../../../assets/images/main.jpg")}
    style={styles.background}
  >
    <View style={{ alignItems: "center", paddingTop: 220 }}>
      {buttonsData.map(({ text, screen, styles }) => (
        <Button text={text} screen={screen} styles={styles} />
      ))}
    </View>
  </ImageBackground>
);

export default HomeScreen;
