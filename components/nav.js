import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
export function Nav() {
  const navigation = useNavigation();
  console.log(navigation.getState());
  return (
    <View style={styles.nav}>

      <Text style={styles.title}>Avisa iF</Text>
            <View style={styles.drawerButton}>
        <Pressable
          onPress={() =>  navigation.openDrawer()}
          style={{ marginRight: 12 }}>
          <Image
            source={require('../assets/hamburgerIcon.png')}
            style={styles.image}
          />
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  //topbar
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '10%',
    backgroundColor: '#34b514',
    paddingHorizontal: 16,
  },
  title: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    fontFamily: 'Poppins_700Bold',
    fontSize: 24,
  },
  image: {
    width: 20,
    height: 20,
  },
});
