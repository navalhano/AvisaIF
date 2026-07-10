import { Text } from "react-native";
import { Colors } from "@/constants/Colors";

const ThemedText = ({ style, title = false, ...props }) => {
  //const colorScheme = useColorScheme();
  //const theme = Colors[colorScheme] ?? Colors.light;

  const textColor = title ? Colors.light.title : Colors.light.text;
  return <Text style={[{ color: textColor }, style]} {...props} />;
};

export default ThemedText;
