import { Stack } from "expo-router";
import { AppProvider } from "../contexts/appContext";
const RootLayout = () => {
  return (
    <AppProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </AppProvider>
  );
};
export default RootLayout;
