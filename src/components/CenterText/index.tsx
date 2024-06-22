import React, { FC } from "react";
import { Text } from "react-native";

interface CenterTextProps {
  text: string;
  paddingBottom?: number;
}

const CenterText: FC<CenterTextProps> = ({ text, paddingBottom }) => {
  return <Text style={{ textAlign: "center", paddingBottom }}>{text}</Text>;
};

export default CenterText;
