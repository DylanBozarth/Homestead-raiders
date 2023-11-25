import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import globalStyles from './styles/globalStyle'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Homepage } from './screens/home';
import { Shelter } from './screens/shelter';
import { Navigation } from './UI/navigation';
import { Tasks } from './screens/tasks';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const bottomTab = createBottomTabNavigator();
const topTab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
      <topTab.Navigator initialRouteName="Home">
        <topTab.Screen name="home" component={Homepage} />
        <topTab.Screen name="shelter" component={Shelter} />
        <topTab.Screen name="tasks" component={Tasks} />
      </topTab.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}