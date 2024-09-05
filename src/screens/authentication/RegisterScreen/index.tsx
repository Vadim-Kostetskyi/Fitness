import {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Platform,
  KeyboardAvoidingView,
  ImageBackground,
} from "react-native";
import { useState } from "react";
// import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import * as ImagePicker from "expo-image-picker";
import Input from "../../../components/Input/Input";
// import { registerDB } from "../redux/auth/authOperations";
// import { storage } from "../config";
import { AntDesign } from "@expo/vector-icons";
import { activate, deactivate } from "../../../helpers/focusing";
import RegisterButton from "@/src/components/LoginRegisterButton";

import { styles } from "./styles";
import { StackNavigation } from "@/src/Router";

const RegisterScreen = () => {
  const navigation = useNavigation<StackNavigation>();
  // const dispatch = useDispatch();

  const [loginIsFocused, setLoginIsFocused] = useState(false);
  const [mailIsFocused, setMailIsFocused] = useState(false);
  const [passwordIsFocused, setPasswordIsFocused] = useState(false);
  const [secureText, setSecureText] = useState(true);

  const [nickname, setNickname] = useState("");
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  // const [avatar, setAvatar] = useState(null);

  // const state = {
  //   nickname,
  //   userEmail: email,
  //   password,
  //   avatar,
  // };

  const handleFocusLogin = activate(setLoginIsFocused);
  const handleBlurLogin = deactivate(setLoginIsFocused);
  const handleFocusMail = activate(setMailIsFocused);
  const handleBlurMail = deactivate(setMailIsFocused);
  const handleFocusPassword = activate(setPasswordIsFocused);
  const handleBlurPassword = deactivate(setPasswordIsFocused);

  const props = [
    {
      value: nickname,
      onChangeText: setNickname,
      placeholder: "Логин",
      onFocus: handleFocusLogin,
      onBlur: handleBlurLogin,
      isFocused: loginIsFocused,
      // stylesFocusedInput: styles.focusedInput,
    },
    {
      value: email,
      onChangeText: setMail,
      placeholder: "Адрес электронной почты",
      onFocus: handleFocusMail,
      onBlur: handleBlurMail,
      isFocused: mailIsFocused,
      // stylesFocusedInput: styles.focusedInput,
    },
    {
      value: password,
      onChangeText: setPassword,
      placeholder: "Пароль",
      onFocus: handleFocusPassword,
      onBlur: handleBlurPassword,
      isFocused: passwordIsFocused,
      // stylesFocusedInput: styles.focusedInput,
      // lastInputMargin: styles.lastInput,
      // secureTextEntry: secureText,
      // secureTextShow: setSecureText,
    },
  ];

  // const handleImagePicker = async () => {
  //   const permissionResult =
  //     await ImagePicker.requestMediaLibraryPermissionsAsync();

  //   if (permissionResult.granted === false) {
  //     Alert.alert("Permission to access storage is required!");
  //     return;
  //   }

  //   const imagePickerResult = await ImagePicker.launchImageLibraryAsync();

  //   if (!imagePickerResult.canceled) {
  //     const imageUri = imagePickerResult.assets[0].uri;
  //     const response = await fetch(imageUri);
  //     const file = await response.blob();

  //     const date = new Date();
  //     const storageRef = ref(storage, `images/${date}`);
  //     let imageUrl;
  //     await uploadBytes(storageRef, file);

  //     await getDownloadURL(ref(storage, `images/${date}`)).then((url) => {
  //       imageUrl = url;
  //     });

  //     setAvatar(imageUrl);
  //   }
  // };

  // const handleSubmit = () => {
  //   setPassword("");
  //   setMail("");
  //   setNickname("");
  //   dispatch(registerDB(state, dispatch));
  // };

  return (
    <ImageBackground
      source={require("@/assets/images/gim.jpg")}
      style={styles.background}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[styles.container, { paddingTop: 92 }]}>
          <View style={styles.photoBox}>
            {/* {avatar && (
              <Image source={{ uri: avatar }} style={styles.wholeBox} />
            )} */}
            <TouchableOpacity
              style={styles.photoAdd}
              // onPress={handleImagePicker}
            >
              <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
            </TouchableOpacity>
          </View>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={{ width: "100%" }}
          >
            <Text style={[styles.header, { fontFamily: "Roboto-Medium" }]}>
              Реєстрація
            </Text>
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
                    // lastInputMargin={prop.lastInputMargin}
                    // secureTextEntry={prop.secureTextEntry}
                    // secureTextShow={prop.secureTextShow}
                  />
                );
              })}
            </View>
          </KeyboardAvoidingView>
          <RegisterButton title="Зареєструватися" />

          <TouchableOpacity
            style={{ marginBottom: 45 }}
            onPress={() =>
              navigation.navigate("Login", {
                saveEmail: email,
                savePassword: password,
              })
            }
          >
            <Text style={styles.redirect}>Вже є аккаунт? Увійти</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default RegisterScreen;
