import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import MaskInput from 'react-native-mask-input';
import { Alert, Text, View, TextInput, Pressable, StyleSheet } from 'react-native'
import {
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import {Nav} from '../components/nav'
const dataMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

export function CreateAvisoForm({avisos, setAvisos, navigation}){
  
  function newAviso(title, data, descricao) {
    return {
      id: Date.now().toString(),
      title: title,
      data: data,
      descricao: descricao
    };
  }
  function criarAviso() {
    if (!title.trim()) {
      Alert.alert('Erro', 'Informe o título do aviso.');
      return;
    }
    if (!data.trim() || data.length < 10) {
      Alert.alert('Erro', 'Informe uma data válida (DD/MM/AAAA).');
      return;
    }
    const aviso = newAviso(title, data, descricao);
    setAvisos([...avisos, aviso]);
    setTitle('');
    setData('');
    setDescricao('');
    navigation.goBack();
  }
  const [title, setTitle] = useState('');
  const [data, setData] = useState('');
  const [descricao, setDescricao] = useState('');
  return(
    <SafeAreaView style ={styles.container}>
    <Nav/>
      <View style={styles.view}>
        <TextInput
          style={styles.text}
          placeholder="Título do aviso"
          value={title}
          onChangeText={setTitle}
        />
        <MaskInput
          style={styles.text}
          placeholder="Data (DD/MM/AAAA)"
          value={data}
          onChangeText={(masked) => setData(masked)}
          mask={dataMask}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.text}
          placeholder="Descrição"
          value={descricao}
          onChangeText={setDescricao}
        />
          <View style ={styles.buttonContainer}>
          <Pressable onPress={criarAviso}
          style= {({ pressed }) => [
              styles.button, 
              pressed && styles.buttonPressed]}
          >
            
          {({ pressed }) => (
          <Text
          style={[
          styles.textoBotao,
          pressed && styles.textoBotaoPressed
        ]}>
            Criar Aviso
          </Text>
          )}
          </Pressable>
          <Pressable onPress={() => navigation.goBack()}
            style={styles.cancelButton}>
          <Text style={styles.textoBotao}>
          Cancelar
          </Text>
        </Pressable>
        </View>
      </View>
    </SafeAreaView>  
  )
  
}

 const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    //view
    view: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
    //text inputs
  text: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#b6fca4',
    width: '100%',
    height: '7%',
    borderRadius: 20,
    // fontFamily: Poppins_400Regular
  },
  //botões
  buttonContainer:{
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10
  },
  button: {
    width: '40%',
    height: '7%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginRight: 15,
    backgroundColor: '#62c949',
  },
  buttonPressed: {
    backgroundColor: '#b6fca4',
  },
  textoBotao: {
    // fontFamily: Poppins_700Bold,
    fontWeight:'bold'
  },
  textoBotaoPressed: {
    // fontFamily: Poppins_400Regular,
    color: 'white'
  },
  cancelButton: {
    width: '40%',
    height: '7%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#de4b5d'
  }
});