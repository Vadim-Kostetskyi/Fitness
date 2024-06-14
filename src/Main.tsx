import { NavigationContainer } from "@react-navigation/native";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";

// import { authStateChanged } from "../redux/auth/authOperations";
import Router from "./Router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authStateChanged } from "./redux/auth/authOperations";

const Main = () => {
  const dispatch = useDispatch();

  const logIn = useSelector((state) => state.auth.isLogIn);
  console.log(logIn);

  useEffect(() => {
    dispatch(authStateChanged());
  }, []);

  // const routing = Router(false);

  return (
    <NavigationContainer independent={true}>
      <Router isAuth={logIn} />
    </NavigationContainer>
  );
};

export default Main;
