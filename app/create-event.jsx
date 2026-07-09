import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MaskInput from "react-native-mask-input";
import { router } from "expo-router";
import { Text, View, Pressable, StyleSheet } from "react-native";
import { useApp } from "../hooks/useAppHook";
import { Nav } from "../components/nav";
import ThemedTextInput from "../components/ThemedTextInput";
import ThemedText from "../components/ThemedText";
import ThemedButton from "../components/ThemedButton";

const dataMask = [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/];

export default function CreateEventForm() {
  const { addEvento } = useApp();
  function newEvent(title, data, descricao) {
    return {
      id: Date.now().toString(),
      title: title,
      data: data,
      descricao: descricao,
    };
  }
  function criarEvento() {
    const evento = newEvent(title, data, descricao);
    addEvento(evento);
    setTitle("");
    setData("");
    setDescricao("");
    router.back();
  }
  const [title, setTitle] = useState("");
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <Nav />
      <View style={styles.view}>
        <ThemedTextInput
          placeholder="Nome do evento"
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
        <ThemedTextInput
          placeholder="Descrição"
          value={descricao}
          onChangeText={setDescricao} style={styles.text}
        />
        <View style={styles.buttonContainer}>
          <ThemedButton onPress={criarEvento} style={{width: "40%"}}>
            <ThemedText title={true}>
              Criar Evento
            </ThemedText>
          </ThemedButton>
          <ThemedButton onPress={() => router.back()} style={{width: "40%"}}>
            <ThemedText title={true}>
              Cancelar
            </ThemedText>
          </ThemedButton>
        </View>
      </View>
    </SafeAreaView>
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
    fontWeight: "bold",
  },
  textoBotaoPressed: {
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
