import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  Pressable,
} from 'react-native';
import {Nav} from '../components/nav'
import {Card} from '../components/Card'



export function HomeScreen({ eventos, avisos, navigation }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Nav/>

      <View style={styles.list}>
        <FlatList
          data={eventos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Card evento={true} item={item}/>}
        />
      </View>
      <Text>
</Text>

      <View style={styles.list}>
        <FlatList
          data={avisos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Card aviso= {true} item={item}/>}
        />
      </View>
      <>
        {expanded && (
          <>
            <Pressable
              style={[styles.option, { bottom: 90 }]}
              onPress={() => navigation.navigate('CreateEvent')}>
              <Text style= {{fontFamily: 'Poppins_400Regular'}}>Evento</Text>
            </Pressable>

            <Pressable
              style={[styles.option, { bottom: 140 }]}
              onPress={() => navigation.navigate('CreateAviso')}>
              <Text style= {{fontFamily: 'Poppins_400Regular'}}>Aviso</Text>
            </Pressable>
          </>
        )}

        <Pressable style={styles.fab} onPress={() => setExpanded(!expanded)}>
          <Text style={styles.fabText}>+</Text>
        </Pressable>
      </>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },

  //flatlist de cards
  list: {
    width: '92%',
    height: '25%',
    borderRadius: 20,
    padding: 10,
    marginTop: 20,
    backgroundColor: '#b6fca4',
    justifyContent: 'center',
  },
  
  //fab
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,

    width: 40,
    height: 40,

    borderRadius: 30,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#34b514',

    elevation: 5, // Android
  },

  fabText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  //fab options
  option: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '25%',
    height: '5%',
    right: 20,
    padding: 7,
    borderRadius: 12,
    backgroundColor: '#34b514',

    

  },
});
