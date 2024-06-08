import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import HomeScreen from "./screens/HomeScreen";
// import TrainingScreen from "./screens/TrainingScreen";
// import NumberOfApproachesScreen from "./screens/NumberOfApproaches";
import LoginScreen from "@/screens/LoginScreen";
// import RegisterScreen from "./screens/RegisterScreen";
// import BicepsBackScreen from "./screens/BicepsBackScreen";
// import TricepsChestScreen from "./screens/TricepsChestScreen";

const Stack = createNativeStackNavigator();

const Router = (isAuth) => {
  if (!isAuth) {
    return (
      <Stack.Navigator>
        {/* <AuthStack.Screen name="Register" component={RegisterScreen} /> */}
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    );
  }
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      {/* <AuthStack.Screen name="Home" component={HomeScreen} />
      <AuthStack.Screen name="Training" component={TrainingScreen} />
      <AuthStack.Screen name="BicepsBack" component={BicepsBackScreen} />
      <AuthStack.Screen name="TricepsChest" component={TricepsChestScreen} />

      <AuthStack.Screen
        name="NumberOfApproaches"
        component={NumberOfApproachesScreen}
      /> */}
    </Stack.Navigator>
  );
};

export default Router;
