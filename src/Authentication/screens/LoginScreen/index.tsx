import {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
  ImageBackground,
} from "react-native";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Input from "@/src/Authentication/components/Input/Input";
import { loginDB } from "@/src/redux/auth/authOperations";
import { handleFocus, handleBlur } from "@/src/helpers/focusing";
import LoginButton from "@/src/Authentication/components/LoginRegisterButton";
import { styles } from "./styles";
import { StackNavigation } from "@/src/Router";

const LoginScreen = () => {
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [mailIsFocused, setMailIsFocused] = useState(false);
  const [passwordIsFocused, setPasswordIsFocused] = useState(false);
  const [secureText, setSecureText] = useState(true);

  // const route = useRoute();
  // const {
  //   params: { saveEmail, savePassword },
  // } = useRoute();
  // console.log(route);

  const navigation = useNavigation<StackNavigation>();

  const dispatch = useDispatch();

  const state = {
    userEmail: email,
    password,
  };

  const handleFocusMail = handleFocus(setMailIsFocused);
  const handleBlurMail = handleBlur(setMailIsFocused);
  const handleFocusPassword = handleFocus(setPasswordIsFocused);
  const handleBlurPassword = handleBlur(setPasswordIsFocused);

  const props = [
    {
      value: email,
      onChangeText: setMail,
      placeholder: "Адрес электронной почты",
      onFocus: handleFocusMail,
      onBlur: handleBlurMail,
      isFocused: mailIsFocused,
    },
    {
      value: password,
      onChangeText: setPassword,
      placeholder: "Пароль",
      onFocus: handleFocusPassword,
      onBlur: handleBlurPassword,
      isFocused: passwordIsFocused,
      lastInputMargin: styles.lastInput,
      secureTextEntry: secureText,
      secureTextShow: setSecureText,
    },
  ];

  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("@/assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("@/assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const hendleSubmit = () => {
    setPassword("");
    setMail("");
    loginDB(state);
  };

  return (
    <ImageBackground
      source={require("@/assets/images/gim.jpg")}
      style={styles.background}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={[
            styles.container,
            Keyboard.isVisible()
              ? { paddingBottom: 111 }
              : { paddingBottom: 0 },
          ]}
        >
          <Text style={[styles.header, { fontFamily: "Roboto-Medium" }]}>
            Вхід
          </Text>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={{ width: "100%" }}
          >
            <View style={{ marginBottom: 40 }}>
              {props.map((prop, index) => {
                return (
                  <Input
                    key={index}
                    width={"100%"}
                    marginBottom={index < props.length - 1 ? 20 : 0}
                    value={prop.value}
                    onChangeText={prop.onChangeText}
                    placeholder={prop.placeholder}
                    onFocus={prop.onFocus}
                    onBlur={prop.onBlur}
                    isFocused={prop.isFocused}
                    lastInputMargin={prop.lastInputMargin}
                    secureTextEntry={prop.secureTextEntry}
                    secureTextShow={prop.secureTextShow}
                  />
                );
              })}
            </View>
          </KeyboardAvoidingView>
          <LoginButton title="Увійти" />

          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Register", {
                saveEmail: email,
                savePassword: password,
              })
            }
          >
            <Text style={styles.redirect}>
              Не маєш аккаунта? Зареєструватися
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default LoginScreen;
