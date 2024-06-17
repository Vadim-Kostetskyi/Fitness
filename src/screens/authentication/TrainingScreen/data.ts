import { styles } from "./styles";

export const buttonsDataTrainingScreen = [
  {
    text: "Тріцепс/грудь",
    screen: "TricepsChest",
    styles: styles.trainingChoose,
  },
  {
    text: "Біцепс/спина",
    screen: "BicepsBack",
    styles: [styles.trainingChoose, styles.noMarginBottom],
  },
];
