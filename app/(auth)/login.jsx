import {
  StyleSheet,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { Link } from "expo-router";
import { useState } from "react";

const Login = () => {
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
  //const [error, setError] = useState(null);

  /* const { user, login } = useUser();
  const handleSubmit = async () => {
    setError(null);
    try {
      await login(email, password);
    } catch (error) {
      setError(error.message);
    }
    */
  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <ThemedView style={styles.container}>
        <Image
          source={require('../../assets/auth_background.png')}
          style={styles.authImage}
        />
        <Spacer />
        <ThemedText title={true} style={styles.title}>
          Bem-vindo de volta!
        </ThemedText>
        <ThemedTextInput
          style={{ width: "80%", marginBottom: 20 }}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
        />

        <ThemedTextInput
          style={{ width: "80%", marginBottom: 20 }}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <ThemedButton onPress={handleSubmit}>
          <Text style={{ color: "#f2f2f2" }}>Login</Text>
        </ThemedButton>

        <Spacer />
        {error && <Text style={styles.error}>{error}</Text>}
        <Spacer height={100} />
        <Link href="/register">
          <ThemedText style={{ textAlign: "center" }}>
            Register instead
          </ThemedText>
        </Link>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  pressed: {
    opacity: 0.8,
  },
  error: {
    //color: Colors.warning,
    padding: 10,
    backgroundColor: "#f5c1c8",
    borderWidth: 1,
    borderRadius: 6,
    marginHorizontal: 10,
  },
  authImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
    top: 0,
    left: 0,

  }
});
