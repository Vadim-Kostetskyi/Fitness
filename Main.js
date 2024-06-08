import { NavigationContainer } from "@react-navigation/native";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";

// import { authStateChanged } from "../redux/auth/authOperations";
import Router from "@/Router";

const Main = () => {
  // const dispatch = useDispatch();

  // const logIn = useSelector((state) => state.auth.isLogIn);

  // useEffect(() => {
  //   dispatch(authStateChanged());
  // }, []);

  const routing = Router(false);

  return (
    <NavigationContainer independent={true}>{routing}</NavigationContainer>
  );
};

export default Main;
