import { Stack } from "expo-router";
import { AppProvider } from "@/contexts/appContext";
import { AuthProvider } from "@/contexts/authContext";
const RootLayout = () => {
  return (
    <AuthProvider>
      <AppProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </AppProvider>
    </AuthProvider>
  );
};
export default RootLayout;
