import { HomeScreen } from '../Screens/HomeScreen';
import { CreateEventForm } from '../Screens/CreateEventForm';
import { CreateAvisoForm } from '../Screens/CreateAvisoForm';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
export function StackEvents({ eventos, setEventos, avisos, setAvisos }) {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home">
        {(props) => <HomeScreen {...props} eventos={eventos} avisos = {avisos} />}
      </Stack.Screen>

      <Stack.Screen name="CreateEvent">
        {(props) => (
          <CreateEventForm
            {...props}
            eventos={eventos}
            setEventos={setEventos}
          />
        )}
      </Stack.Screen>
       <Stack.Screen name="CreateAviso">
        {(props) => (
          <CreateAvisoForm
            {...props}
            avisos={avisos}
            setAvisos={setAvisos}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
