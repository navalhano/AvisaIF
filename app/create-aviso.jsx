import { useState } from "react";
import MaskInput from "react-native-mask-input";
import { router } from "expo-router";
import {
  Alert,
  Text,
  View,
  TextInput,
  StyleSheet,
} from "react-native";
import { Nav } from "../components/nav";
import { useApp } from "../hooks/useAppHook";
import ThemedText from "../components/ThemedText";
import ThemedView from "../components/ThemedView";
import ThemedButton from "../components/ThemedButton";
import ThemedTextInput from "../components/ThemedTextInput";

const dataMask = [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/];

export default function CreateAvisoForm() {
  const [title, setTitle] = useState("");
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");
  const { addAviso } = useApp();
  function newAviso(title, data) {
    return {
      id: Date.now().toString(),
      title: title,
      data: data,
    };
  }
  function criarAviso() {
    if (!title.trim()) {
      Alert.alert("Erro", "Informe o título do aviso.");
      return;
    }
    if (!data.trim() || data.length < 10) {
      Alert.alert("Erro", "Informe uma data válida (DD/MM/AAAA).");
      return;
    }
    const aviso = newAviso(title, data);
    addAviso(aviso);
    setTitle("");
    setData("");
    router.back();
  }
  console.log("ThemedTextInput:", ThemedTextInput);
  console.log("ThemedButton:", ThemedButton);
  return (
    <ThemedView style={styles.container} safe = {true}>
      <Nav />
      <View style={styles.view}>
        <ThemedTextInput
          placeholder="Título do aviso"
          value={title}
          onChangeText={setTitle} style={styles.text}
        />
        <MaskInput
          style={[styles.text, {backgroundColor: "#d6f6da"}]}
          placeholder="Data (DD/MM/AAAA)"
          value={data}
          onChangeText={(masked) => setData(masked)}
          mask={dataMask}
          keyboardType="numeric"
        />
        {/* <ThemedTextInput
          placeholder="Descrição"
          value={descricao}
          onChangeText={setDescricao} style={styles.text}
        />*/}

        <View style={styles.buttonContainer}>
          <ThemedButton onPress={criarAviso} style={{width: "40%"}}>
            <ThemedText title = {true}>
              Criar Aviso
            </ThemedText>
          </ThemedButton>
          <ThemedButton onPress={() => router.back()} style={{width: "40%"}}>
            <ThemedText title = {true}>
              Cancelar
            </ThemedText>
          </ThemedButton>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  //view
  view: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  //text inputs
  text: {
    marginBottom: 10,
    padding: 10,
    width: "100%",
    height: "7%",
    borderRadius: 20,
    // fontFamily: Poppins_400Regular
  },
  //botões
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    gap: 15, // se sua versão do RN suportar
  },
  button: {
    width: "40%",
    height: "7%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginRight: 15,
    backgroundColor: "#62c949",
  },
  buttonPressed: {
    backgroundColor: "#b6fca4",
  },
  textoBotao: {
    // fontFamily: Poppins_700Bold,
    fontWeight: "bold",
  },
  textoBotaoPressed: {
    // fontFamily: Poppins_400Regular,
    color: "white",
  },
  cancelButton: {
    width: "40%",
    height: "7%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#de4b5d",
  },
});
