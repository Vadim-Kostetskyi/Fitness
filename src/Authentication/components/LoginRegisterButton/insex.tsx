import React, { FC } from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

interface LoginRegisterButtonProps {
  title: string;
  handleSubmit?: () => void;
}

const LoginRegisterButton: FC<LoginRegisterButtonProps> = ({
  title,
  handleSubmit,
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default LoginRegisterButton;
