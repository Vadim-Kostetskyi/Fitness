import { Dispatch, FC } from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import CenterText from "../CenterText";
import { styles } from "./styles";

interface SelectNumberWithArrowsProps {
  title: string;
  amount: number;
  setChange: (number: number) => void;
  doubleChange?: boolean;
}

const SelectNumberWithArrows: FC<SelectNumberWithArrowsProps> = ({
  title,
  setChange,
  amount,
  doubleChange,
}) => {
  return (
    <>
      <CenterText text={title} paddingBottom={25} />
      <View
        style={[
          {
            flexDirection: "row",
            width: 150,
            marginBottom: 15,
          },
          styles.center,
        ]}
      >
        {doubleChange ? (
          <TouchableOpacity
            onPress={() => setChange(-10)}
            disabled={amount < 10}
          >
            <AntDesign name="doubleleft" size={24} color="black" />
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity onPress={() => setChange(-1)} disabled={amount === 0}>
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        <View
          style={[
            styles.approach,
            styles.center,
            { position: "relative", top: -10 },
          ]}
        >
          <CenterText text={amount.toString()} />
        </View>
        <TouchableOpacity onPress={() => setChange(1)}>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
        {doubleChange ? (
          <TouchableOpacity onPress={() => setChange(10)}>
            <AntDesign name="doubleright" size={24} color="black" />
          </TouchableOpacity>
        ) : null}
      </View>
    </>
  );
};

export default SelectNumberWithArrows;
