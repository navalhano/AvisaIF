import { Drawer } from "expo-router/drawer";
import { ThemedDrawer } from "@/components/ThemedDrawer";
export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={(props) => <ThemedDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#43a24f",
        },
      }}
    >
      <Drawer.Screen name="home" options={{title: "home"}} />
      <Drawer.Screen name="profile" options={{title: "profile"}} />
    </Drawer>
  );

};
