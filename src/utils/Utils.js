import { Alert } from "react-native";

export const showAlert = (message) => {
  Alert.alert(
    "",
    message,
    [{ text: "OK", onPress: () => console.log("OK Pressed") }],
    { cancelable: false }
  );
};
