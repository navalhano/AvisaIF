import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, Image, StyleSheet } from "react-native";

export function ThemedDrawer(props) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />
      </View>

      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.itemsContainer}
      >
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#d6f6da", // debug
  },
  header: {
    backgroundColor: "#34b514",
    alignItems: "center",
    paddingVertical: 30,
  },
  itemsContainer: {
    paddingTop: 0,
  },
  logo: {
    width: 120,
    height: 80,
    resizeMode: "contain",
  },
});
