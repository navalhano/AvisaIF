import { Pressable, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

function ThemedButton({ style, children, ...props }) {
  return (
    <Pressable
      {...props}
      style={({ pressed }) => [
        styles.btn,
        style,
        pressed && styles.pressed,
      ]}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default ThemedButton;
