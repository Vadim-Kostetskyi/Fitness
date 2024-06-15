import React, { FC, Dispatch } from "react";
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Button from "./Button";
import Input from "./Input/Input";
import { styles } from "./styles";

const screenWidth = Dimensions.get("window").width;
const halfScreenWidth = screenWidth / 2;
const exerciseButtonWidth = halfScreenWidth + 50;

interface ExercisesProps {
  exercise?: string;
  exercises: string[];
  done?: string;
  addExercise: () => void;
  addNewExercise?: () => void;
  cancelNewExercise?: () => void;
  isAddNewExercise?: boolean;
  setExercise?: Dispatch<React.SetStateAction<string>>;
  memoryExercises?: [];
}

const Exercises: FC<ExercisesProps> = ({
  exercises,
  done,
  addExercise,
  isAddNewExercise,
  addNewExercise,
  cancelNewExercise,
  exercise,
  setExercise,
  memoryExercises,
}) => {
  const exerciseProps = {
    styles: styles.exercise,
    width: exerciseButtonWidth,
    marginBottom: 0,
    marginRight: 25,
    backgroundColor: done ? "#5CFB44" : "#E3B33D",
    screen: "NumberOfApproaches",
    params: 0,
  };

  const props = {
    value: exercise,
    onChangeText: setExercise,
    placeholder: "Введи назву вправи",
    addExercise,
    cancelNewExercise,
    // onFocus: handleFocus,
    // onBlur: handleBlur,
    // isFocused: isFocused,
    // stylesFocusedInput: styles.focusedInput,
    // commments: true,
    // submit: handleSubmit,
  };
  return (
    <ScrollView style={{ marginTop: 20, paddingTop: 50, marginBottom: 50 }}>
      {exercises.map(
        (el) => (
          memoryExercises && console.log(memoryExercises[el][1]),
          console.log(111),
          (console.log(el),
          (
            <View key={el} style={{ flexDirection: "row", marginBottom: 50 }}>
              <Button
                text={el}
                {...exerciseProps}
                navParams={{ exercise: el }}
              />
              <View
                style={[
                  styles.exerciseNumber,
                  done && { backgroundColor: "#5CFB44", borderWidth: 0 },
                ]}
              >
                <Text style={[{ fontSize: 25, color: "#FFFFFF" }]}>
                  {memoryExercises &&
                    ` ${memoryExercises[el][0].join("/")}\n ${memoryExercises[
                      el
                    ][1].join("/")}кг`}
                  {/* 50rf */}
                </Text>
              </View>
            </View>
          ))
        )
      )}
      {isAddNewExercise ? (
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={{ width: "100%" }}
        >
          <View style={{ flexDirection: "row", marginBottom: 100 }}>
            <Input {...props} />
          </View>
        </KeyboardAvoidingView>
      ) : (
        <TouchableOpacity
          style={[styles.center, { marginBottom: 100 }]}
          onPress={addNewExercise}
        >
          <AntDesign name="plussquareo" size={70} color="black" />
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

export default Exercises;
