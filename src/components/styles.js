import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const halfScreenWidth = screenWidth / 2;
const exerciseButtonWidth = halfScreenWidth + 50;

export const styles = StyleSheet.create({
  center: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  noMarginBottom: {
    marginBottom: 0,
  },
  background: {
    minHeight: "100%",
  },

  //homeScreen
  homeChoose: {
    width: 200,
    marginBottom: 100,
  },

  //trainingScreen
  trainingChoose: {
    width: 200,
    marginBottom: 200,
  },

  //exercisesScreen
  muscle: {
    width: halfScreenWidth,
    backgroundColor: "#695AF",
  },
  exercise: {
    width: exerciseButtonWidth,
    marginBottom: 0,
    marginRight: 25,
  },
  exerciseNumber: {
    display: "flex",
    flexDirection: "row",
    padding: 7,
    alignItems: "center",
    // width: 300,
    height: "100%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#FFFFFF",
  },

  text: {
    fontSize: 25,
    textAlign: "center",
    color: "#FFFFFF",
    width: 65,
  },

  containerInput: {
    width: exerciseButtonWidth,
    flexDirection: "row",
  },
  input: {
    width: "100%",
    height: 50,

    padding: 16,
    marginRight: 25,

    fontSize: 16,
    lineHeight: 19,

    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 8,

    backgroundColor: "rgb(246, 246, 246)",
  },

  //NumberOfApproachesScreen
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
    width: 40,
    height: 40,
    backgroundColor: "red",
    borderRadius: 10,
  },
});
