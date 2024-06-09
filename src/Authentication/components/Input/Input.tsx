import React, { FC, Dispatch } from "react";
import {
  TextInput,
  TouchableOpacity,
  Text,
  View,
  DimensionValue,
} from "react-native";
import { useFonts } from "expo-font";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";

interface InputProps {
  value: string;
  onChangeText: Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  onFocus: () => void;
  onBlur: () => void;
  isFocused?: boolean;
  lastInputMargin?: { marginBottom: number };
  textContentType?:
    | "none"
    | "password"
    | "URL"
    | "addressCity"
    | "addressCityAndState"
    | "addressState"
    | "countryName"
    | "creditCardNumber"
    | "creditCardExpiration"
    | "creditCardExpirationMonth";
  secureTextEntry?: boolean;
  addExercise?: () => void;
  cancelNewExercise?: () => void;
  marginBottom: number;
  width: DimensionValue;
  secureTextShow?: Dispatch<React.SetStateAction<boolean>>;
}

const Input: FC<InputProps> = ({
  value,
  onChangeText,
  placeholder,
  onFocus,
  onBlur,
  // isFocused,
  // lastInputMargin,
  textContentType,
  secureTextEntry,
  addExercise,
  cancelNewExercise,
  marginBottom,
  width,
  // secureTextShow,
}) => {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("@/assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={width ? { width: width } : styles.containerInput}>
      <TextInput
        style={[
          styles.input,
          { fontFamily: "Roboto-Regular", marginBottom: 0 || marginBottom },
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#BDBDBD"
        onFocus={onFocus}
        onBlur={onBlur}
        // isFocused={isFocused}
        // lastInputMargin={lastInputMargin}
        textContentType={textContentType}
        secureTextEntry={secureTextEntry}
        // secureTextShow={secureTextShow}
      />
      {addExercise && (
        <TouchableOpacity onPress={addExercise}>
          <MaterialIcons
            name="done"
            size={44}
            color="#27F50E"
            style={{ marginRight: 15, paddingTop: 5 }}
          />
        </TouchableOpacity>
      )}
      {cancelNewExercise && (
        <TouchableOpacity onPress={cancelNewExercise}>
          <AntDesign
            name="plus"
            size={44}
            color="#FF2218"
            style={{
              paddingTop: 5,
              transform: "rotate(45deg)",
            }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;
