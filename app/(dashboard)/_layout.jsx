import { Stack, Redirect } from "expo-router";
import useAuth from "@/hooks/useAuthHook";

export default function AppLayout() {
  const { user, loading } = useAuth();

  if (loading) {
    return null;
  }
  if (!user) {
    return <Redirect href="/login" />;
  }
  return (
    <Stack screenOptions={{headerShown: false}}/>
  )
}
