import React, { Dispatch, SetStateAction } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./styles";
import ApproachButton from "../components/ApproachesButton";
import { setNumberOfApproaches } from "../redux/exercises/exercisesOperations";

const NumberOfApproachesScreen = () => {
  const {
    params: { exercise },
  } = useRoute();

  const oldExercise = useSelector((state) => state.exercises.exercises);

  const [quantity, setQuantity] = useState(
    oldExercise[exercise][0] || [0, 0, 0]
  );
  const [exercisesCompleted, setExercisesCompleted] = useState(-1);
  const [exerciseCompleted, setExerciseCompleted] = useState(0);
  const [weight, setWeight] = useState(oldExercise[exercise][1] || [0, 0, 0]);
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
    setExercisesCompleted(indexWithZero);
    setApproach(indexWithZero !== -1 ? indexWithZero : 2);
  }, []);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const add = (
    set: Dispatch<React.SetStateAction<[number, number, number]>>,
    number: number
  ) => {
    set(
      (prev) =>
        prev.map((value, index) =>
          index === approach ? value + number : value
        ) as [number, number, number]
    );
  };

  const changeApproach = (number: number) => {
    setApproach(number);
    setAskWindow(
      (prev) => prev.map((value, index) => (index === number ? true : false))
      // [false, false, false]
    );
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

      // navigation.navigate(-1);
    } catch (error) {
      console.log(22222);
      console.error(error);
    }
  };

  return (
    <View style={{ paddingTop: 100 }}>
      <View style={[styles.exerciseName, styles.center]}>
        <Text style={{ textAlign: "center" }}>{exercise}</Text>
      </View>
      {/* <View style={[styles.exerciseName, styles.center]}> */}
      <Text style={{ textAlign: "center", paddingBottom: 15 }}>Підхід</Text>
      {/* </View> */}
      <View
        style={[
          { flexDirection: "row", width: 200, marginBottom: 45 },
          styles.center,
        ]}
      >
        <ApproachButton
          func={() => changeApproach(0)}
          text={"1"}
          done={!!(exerciseCompleted >= 1)}
          longPress={() => changeApproach(0)}
          // focus={onFocusButton}
          isFocused={askWindow[0]}
        />
        <ApproachButton
          func={() => changeApproach(1)}
          text={"2"}
          done={exerciseCompleted >= 2}
          longPress={() => changeApproach(1)}
          // focus={onFocusButton}
          isFocused={askWindow[1]}
        />
        <ApproachButton
          func={() => changeApproach(2)}
          text={"3"}
          done={exerciseCompleted === 3}
          longPress={() => changeApproach(2)}
          // focus={onFocusButton}
          isFocused={askWindow[2]}
        />
      </View>
      {/* <View style={[styles.exerciseName, styles.center]}> */}
      <Text style={{ textAlign: "center", paddingBottom: 25 }}>
        К-сть повторів
      </Text>
      {/* </View> */}
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
        <TouchableOpacity
          onPress={() => add(setQuantity, -1)}
          disabled={quantity[approach] === 0}
        >
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        <View
          style={[
            styles.approach,
            styles.center,
            { position: "relative", top: -10 },
          ]}
        >
          <Text style={{ textAlign: "center" }}> {quantity[approach]} </Text>
        </View>
        <TouchableOpacity onPress={() => add(setQuantity, 1)}>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", marginBottom: 15 }}>
        <ApproachButton
          func={() => add(setQuantity, -10)}
          text={"-10"}
          disable={quantity[approach] < 10}
        />
        <ApproachButton func={() => add(setQuantity, 10)} text={"+10"} />
      </View>
      <View style={{ flexDirection: "row", marginBottom: 15 }}>
        <ApproachButton
          func={() => add(setQuantity, -50)}
          text={"-50"}
          disable={quantity[approach] < 50}
        />
        <ApproachButton func={() => add(setQuantity, 50)} text={"+50"} />
      </View>

      <Text style={{ textAlign: "center", paddingBottom: 25 }}>Вага</Text>

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
        <TouchableOpacity
          onPress={() => add(setWeight, -10)}
          disabled={weight[approach] < 10}
        >
          <AntDesign name="doubleleft" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => add(setWeight, -1)}
          disabled={weight[approach] === 0}
        >
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        <View
          style={[
            styles.approach,
            styles.center,
            { position: "relative", top: -10 },
          ]}
        >
          <Text style={{ textAlign: "center" }}> {weight[approach]} </Text>
        </View>
        <TouchableOpacity onPress={() => add(setWeight, 1)}>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => add(setWeight, 10)}>
          <AntDesign name="doubleright" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={[styles.center]} onPress={memorize}>
        <Ionicons name="checkmark-circle-outline" size={38} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default NumberOfApproachesScreen;
