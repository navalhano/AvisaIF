import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
export function Nav() {
  const navigation = useNavigation();
  return (
    <View style={styles.nav}>
      <View style={styles.side}>
        <Pressable onPress={() => navigation.openDrawer()}>
          <Image
            source={require("../assets/hamburgerIcon.png")}
            style={styles.image}
          />
        </Pressable>
      </View>

      <View style={styles.center}>
        <Image
          source={require("@/assets/logo.png")}
          style={styles.logo}
        />
      </View>

      <View style={styles.side} />
    </View>
  );
}
const styles = StyleSheet.create({
  //topbar
  nav: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 70,
    backgroundColor: "#34b514",
    paddingHorizontal: 16,
    position: "relative",
  },

  drawerButton: {
    zIndex: 1,
  },

  logo: {
    alignSelf: "center",
    width: 250,
    height: 80,
    resizeMode: "contain",
  },
  title: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    fontFamily: 'Poppins_700Bold',
    fontSize: 24,
  },
  image: {
    width: 30,
    height: 30,
  },
  side: {
    width: 40,
    alignItems: "center",
  },

  center: {
    flex: 1,
    alignItems: "center",
  },
});
