import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';
export function Card({ item, evento = false, aviso = false }) {
  if (evento)
    return (
      <View style={styles.card}>
        <Text style={Colors.light.title}>
          {item.title} ({item.data})
        </Text>
        <Text style={Colors.light.text}>{item.descricao}</Text>
      </View>
    );
  if (aviso)
    return (
      <View style={styles.card}>
        <Text style={Colors.light.title}>
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
