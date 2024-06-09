import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const halfScreenWidth = screenWidth / 2;
const exerciseButtonWidth = halfScreenWidth + 50;

export const styles = StyleSheet.create({
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
});
