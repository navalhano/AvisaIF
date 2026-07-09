import { TextInput } from "react-native";
import { Colors } from "../constants/Colors";

const ThemedTextInput = ({ style, ...props }) => {
  //const colorScheme = useColorScheme();
  //const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <TextInput
      style={[
        {
          backgroundColor: Colors.light.uiBackground,
          color: Colors.light.text,
          padding: 20,
          borderRadius: 20,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedTextInput;
