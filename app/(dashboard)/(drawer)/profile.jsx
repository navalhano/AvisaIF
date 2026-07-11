import ThemedText from "@/components/ThemedText";
import ThemedButton from "@/components/ThemedButton";
import useAuth from "@/hooks/useAuthHook";
import ThemedView from "@/components/ThemedView";
import { Text } from "react-native";
import { useState } from "react";


export default function ProfileScreen() {
  const { logout } = useAuth();
  const [loading, setLoading] = useState(false);
  async function handleLogout() {
    try {
      setLoading(true);
      await logout();
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <ThemedView safe={true}>
      <ThemedText title={true}>Perfil</ThemedText>
      <ThemedButton onPress={handleLogout} disabled={loading}>
        <Text>Logout</Text>
      </ThemedButton>
    </ThemedView>
  );
}
