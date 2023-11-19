import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import globalStyles from './styles/globalStyle'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Homepage } from './screens/home';
import { Shelter } from './screens/shelter';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Home">
        <Stack.Screen name="home" component={Homepage} />
        <Stack.Screen name="shelter" component={Shelter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}