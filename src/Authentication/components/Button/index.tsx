import React, { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, ViewStyle } from "react-native";
import { StackNavigation } from "@/src/Router";

interface ButtonProps {
  text: string;
  screen: any;
  styles: ViewStyle | ViewStyle[];
  navParams?: any;
  marginBottom?: string;
  marginRight?: string;
  backgroundColor?: string;
  width?: string;
  func?: any;
}
const Button: FC<ButtonProps> = ({
  text,
  screen,
  styles,
  navParams,
  // marginBottom,
  // marginRight,
  backgroundColor,
  // width,
  func,
}) => {
  // console.log(navParams);
  const navigation = useNavigation<StackNavigation>();

  return (
    <TouchableOpacity
      style={[
        styles,
        {
          justifyContent: "center",
          alignItems: "center",
          // width: width || 100,
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 5,
          paddingRight: 5,
          borderRadius: 10,
          opacity: 0.6,
          backgroundColor: backgroundColor || "red",
          // marginBottom: marginBottom,
          // marginRight: marginRight || 0,
        },
      ]}
      onPress={() => (screen ? navigation.navigate(screen, navParams) : func())}
    >
      <Text
        style={{
          fontSize: 24,
          color: "white",
          textAlign: "center",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
