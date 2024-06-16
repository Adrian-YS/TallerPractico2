import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


import Welcome from '../screens/Welcome';
import LoginScreen from '../screens/LoginScreen';
import RegistroScreen from '../screens/RegistroScreen';
import UsuarioScreen from '../screens/UsuarioScreen';
import JugadoresScreen from '../screens/JugadoresScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Registro'>
      <Tab.Screen name="Welcome" component={Welcome}/>
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Registro" component={RegistroScreen} />
      <Tab.Screen name="Usuario" component={UsuarioScreen} />
      <Tab.Screen name='Jugadores' component={JugadoresScreen}/>
    </Tab.Navigator>
  );
}

export default function TabsNavegator(){
  return(
      <NavigationContainer>
      <MyTabs/>
      </NavigationContainer>
  )
}