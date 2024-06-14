import React from "react";
import { View, Text, ImageBackground } from "react-native";

import Button from "../../components/Button";
import { styles } from "./styles";

const HomeScreen = () => {
  const buttons = [
    {
      text: "Календар",
      screen: "Training",
      styles: styles.homeChoose,
    },
    {
      text: "Тренування",
      screen: "Training",
      styles: styles.homeChoose,
    },
    {
      text: "Атлетика",
      screen: "Training",
      styles: [styles.homeChoose, styles.noMarginBottom],
    },
  ];

  return (
    <ImageBackground
      source={require("../../../assets/images/main.jpg")}
      style={styles.background}
    >
      <View style={{ alignItems: "center", paddingTop: 220 }}>
        <Button
          text={"Календар"}
          screen={"Training"}
          styles={styles.homeChoose}
        />
        <Button
          text={"Тренування"}
          screen={"Training"}
          styles={styles.homeChoose}
        />
        <Button
          text={"Атлетика"}
          screen={"Training"}
          styles={[styles.homeChoose, styles.noMarginBottom]}
        />
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
