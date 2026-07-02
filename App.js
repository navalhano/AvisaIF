import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackEvents } from './Navigators/StackEvents';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

const Drawer = createDrawerNavigator();

export default function App() {
  const [eventos, setEventos] = useState([]);
   const [avisos, setAvisos] = useState([]);
   const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });
  
  if (!fontsLoaded) return null
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Inicio"
          options={{
            headerShown: false,
          }}>
          {(props) => (
            <StackEvents {...props} eventos={eventos} setEventos={setEventos} avisos={avisos} setAvisos={setAvisos} />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}