import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  background: {
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
  },
  photoBox: {
    position: "absolute",
    left: "50%",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    transform: [{ translateX: -windowWidth / 9 }],
  },
  photoAdd: {
    position: "absolute",
    bottom: 14,
    right: -13,
    color: "#FF6C00",
  },
  header: {
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    marginBottom: 32,
  },
  redirect: {
    fontSize: 16,
    lineHeight: 19,
    marginLeft: "auto",
    marginRight: "auto",

    color: "#1B4371",
  },
});
