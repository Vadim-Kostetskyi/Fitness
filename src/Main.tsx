import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Router from "./Router";
import { authStateChanged } from "./redux/auth/authOperations";

const Main = () => {
  const dispatch = useDispatch();

  const logIn = useSelector((state) => state.auth.isLogIn);
  console.log(logIn);

  useEffect(() => {
    dispatch(authStateChanged());
  }, []);

  return (
    <NavigationContainer independent={true}>
      <Router isAuth={logIn} />
    </NavigationContainer>
  );
};

export default Main;
