import React, { FC } from "react";
import { NavigationProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./Authentication/screens/HomeScreen";
// import TrainingScreen from "./screens/TrainingScreen";
// import NumberOfApproachesScreen from "./screens/NumberOfApproaches";
import LoginScreen from "./Authentication/screens/LoginScreen";
import RegisterScreen from "./Authentication/screens/RegisterScreen";
// import BicepsBackScreen from "./screens/BicepsBackScreen";
// import TricepsChestScreen from "./screens/TricepsChestScreen";

export type ScreenNames = ["Register", "Login", "Home"];
export type LoginRegisterParams = { saveEmail: string; savePassword: string };
export type RootStackParamList = Record<
  ScreenNames[number],
  LoginRegisterParams
>;
export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

interface RouterProps {
  isAuth: boolean;
}

const Router: FC<RouterProps> = ({ isAuth }) => {
  return (
    <Stack.Navigator>
      {isAuth ? (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          {/* <AuthStack.Screen name="Training" component={TrainingScreen} /> */}
          {/* <AuthStack.Screen name="BicepsBack" component={BicepsBackScreen} /> */}
          {/* <AuthStack.Screen name="TricepsChest" component={TricepsChestScreen} /> */}

          {/* <AuthStack.Screen
        name="NumberOfApproaches"
        component={NumberOfApproachesScreen}
      /> */}
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Router;
