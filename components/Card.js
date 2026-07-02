import{View, Text, StyleSheet} from 'react-native'
import{globalStyles}from "../components/globalStyles"
export function Card ({item, evento = false , aviso = false}){
  if(evento)
  return (
    <View style={styles.card}>
       <Text style={globalStyles.title}>
        {item.title} ({item.data})
      </Text>
      <Text style={globalStyles.text}>{item.descricao}</Text>
    </View>
  );
  if(aviso)
  return (
    <View style={styles.card}>
      <Text style={globalStyles.title}>
        {item.title} ({item.data})
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
    //card dos eventos da semana
  card: {
    width: '100%',
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#8cfa70',
  },
});
