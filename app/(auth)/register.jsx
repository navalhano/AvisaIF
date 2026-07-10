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

import Octicons from '@expo/vector-icons/Octicons';


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { register } = useAuth();

  async function handleRegister() {
    try {
      setLoading(true);
      await register(email, password);
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
            Crie sua conta {" "}
            <Octicons name="person" size={24} color="black" asChild/>
          </ThemedText>
          <ThemedText style={{ right: 60 }}>cadastre-se para continuar</ThemedText>
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
          <ThemedButton style={{
            width: "70%",
            height: 50,
            borderRadius: 10
          }}
            disabled={loading}
            onPress={handleRegister}
          >
            <ThemedText
              style={{ color: "#f2f2f2", fontWeight: "bold", fontSize: 20 }}
            >
              Cadastrar
            </ThemedText>
          </ThemedButton>

          <Spacer />
          <ThemedText style={{ textAlign: "center" }}>
            Já tem uma conta?{" "}
            <Link href="/login" asChild>
              <Text style={{ color: "green", fontWeight: "bold" }}>
                Faça login
              </Text>
            </Link>
          </ThemedText>
        </View>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
};
export default Register;

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
    right: 70
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
