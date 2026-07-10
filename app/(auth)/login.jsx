import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { Link } from "expo-router";
import { useState } from "react";

//hooks
import useAuth from "@/hooks/useAuthHook";

//themed components
import ThemedView from "@/components/ThemedView";
import ThemedTextInput from "@/components/ThemedTextInput";
import ThemedButton from "@/components/ThemedButton";
import Spacer from "@/components/Spacer";
import ThemedText from "@/components/ThemedText";



const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    try {
      setLoading(true);
      await login(email, password);
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }
  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <ThemedView style={styles.container}>
        <Image
          source={require('../../assets/auth_background.png')}
          style={styles.authImage}
        />
        <View style={styles.header}>
          <Image
            source={require('../../assets/logo.png')}
            style={{ width: 200, height: 200 }}
          />
        </View>

        <View style={styles.formContainer}>
          <ThemedText title={true} style={styles.title}>
            Bem-vindo de volta!
          </ThemedText>
          <ThemedText style={{ right: 60 }}>faça login para continuar</ThemedText>
          <View style={styles.inputContainer}>
            <ThemedText style={{ left: 15 }}>E-MAIL</ThemedText>
            <ThemedTextInput
              style={{ marginBottom: 20 }}
              placeholder="exemplo@exemplo.com"
              keyboardType="email-address"
              onChangeText={setEmail}
              value={email}
            />
            <ThemedText style={{ left: 15 }}>SENHA</ThemedText>
            <ThemedTextInput
              style={{ marginBottom: 20 }}
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
              secureTextEntry
            />
          </View>
          <ThemedButton
            style={{
              width: "70%",
              height: 50,
              borderRadius: 10
            }}
            disabled={loading}
            onPress={handleLogin}>
            <ThemedText
              style={{ color: "#f2f2f2", fontWeight: "bold", fontSize: 20 }}
            >
              Entrar
            </ThemedText>
          </ThemedButton>

          <Spacer />
          <ThemedText style={{ textAlign: "center" }}>
            Não tem uma conta?{" "}
            <Link href="/register" asChild>
              <Text style={{ color: "green", fontWeight: "bold" }}>
                Cadastre-se
              </Text>
            </Link>
          </ThemedText>
        </View>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  formContainer: {
    height: "50%",
    width: "80%",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    padding: 20,
    borderRadius: 40,
    marginTop: -65
  },
  inputContainer: {
    width: "100%",
    marginTop: 40
  },
  header: {
    width: "180%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#43a24f",
    borderBottomLeftRadius: 225,
    borderBottomRightRadius: 225,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    right: 60
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
