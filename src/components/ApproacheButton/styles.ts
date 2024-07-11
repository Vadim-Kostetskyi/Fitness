import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("window").width;
const halfScreenWidth = screenWidth / 2;

export const styles = StyleSheet.create({
  exerciseName: {
    width: halfScreenWidth,
    // justifyContent: "center",
    // alignItems: "center",
    padding: 5,
    marginBottom: 35,
    borderRadius: 10,
    backgroundColor: "red",
  },
  approach: {
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    width: 40,
    height: 40,
    backgroundColor: "red",
    borderRadius: 10,
  },
  done: {
    backgroundColor: "#387205",
  },
  focused: {
    borderColor: "black",
    borderWidth: 4,
  },
  text: {
    textAlign: "center",
  },
});
