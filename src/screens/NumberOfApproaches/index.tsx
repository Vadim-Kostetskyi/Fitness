import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import ApproachButton from "@/src/components/ApproacheButton";
import { setNumberOfApproaches } from "@/src/redux/exercises/exercisesOperations";
import CenterText from "@/src/components/CenterText";
import { styles } from "../styles.js";
import ChangeApproach from "@/src/modules/changeApproach";

const NumberOfApproachesScreen = () => {
  const {
    params: { exercise },
  } = useRoute();
  const { t } = useTranslation();

  const oldExercise = useSelector((state) => state.exercises.exercises);

  const [quantity, setQuantity] = useState(
    Object.keys(oldExercise).length ? oldExercise[exercise][0] : [0, 0, 0]
  );
  // const [exercisesCompleted, setExercisesCompleted] = useState(-1); //
  const [exerciseCompleted, setExerciseCompleted] = useState(0);
  const [weight, setWeight] = useState(
    Object.keys(oldExercise).length ? oldExercise[exercise][1] : [0, 0, 0]
  );
  const [askWindow, setAskWindow] = useState([false, false, false]);
  const [approach, setApproach] = useState(0);

  useEffect(() => {
    const indexWithZero = quantity.findIndex((el) => el === 0);
    console.log("indexWithZero", indexWithZero);
    if (indexWithZero === 1) {
      setExerciseCompleted(1);
    } else if (indexWithZero === 2) {
      setExerciseCompleted(2);
    } else if (indexWithZero < 0) {
      setExerciseCompleted(3);
    }
    setExercisesCompleted(indexWithZero); //

    setApproach(indexWithZero !== -1 ? indexWithZero : 2);
  }, []);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const changeApproach = (number: number) => () => {
    setApproach(number);
    setAskWindow((prev) => prev.map((value, index) => index === number));
  };

  const memorize = async () => {
    try {
      await dispatch(
        setNumberOfApproaches({
          exercise,
          quantity,
          weight,
        })
      );

      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ paddingTop: 100 }}>
      <View style={[styles.exerciseName, styles.center]}>
        <CenterText text={exercise} />
      </View>
      <CenterText text={t("approach")} paddingBottom={15} />
      <View
        style={[
          { flexDirection: "row", width: 200, marginBottom: 45 },
          styles.center,
        ]}
      >
        {[0, 1, 2].map((index) => {
          return (
            <ApproachButton
              chooseExercise={changeApproach(index)}
              digit={`${index + 1}`}
              done={!!(exerciseCompleted >= index + 1)}
              longPress={changeApproach(index)}
              // focus={onFocusButton} //
              isFocused={askWindow[index]}
              quantity={quantity}
              index={index}
              disable={quantity ? !!quantity[index] : false} //
            />
          );
        })}
      </View>

      <ChangeApproach
        setQuantity={setQuantity}
        setWeight={setWeight}
        approach={approach}
        weight={weight}
        quantity={quantity}
      />
      <TouchableOpacity style={[styles.center]} onPress={memorize}>
        <Ionicons name="checkmark-circle-outline" size={38} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default NumberOfApproachesScreen;
