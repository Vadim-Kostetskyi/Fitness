import { TextInput, TouchableOpacity, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

import { styles } from "@/styles";

const Input = ({
  value,
  onChangeText,
  placeholder,
  onFocus,
  onBlur,
  textContentType,
  secureTextEntry,
  addExercise,
  cancelNewExercise,
  marginBottom,
  width,
}) => {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
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
        textContentType={textContentType}
        secureTextEntry={secureTextEntry}
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
