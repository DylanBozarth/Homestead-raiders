import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import globalStyles from './styles/globalStyle'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Homepage } from './screens/home';
import { Shelter } from './screens/shelter';
import { Navigation } from './UI/navigation';
import { Tasks } from './screens/tasks';
import { SafeAreaView } from 'react-native-safe-area-context';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>  
        <Navigation /> {/* does not appear */}
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="home" component={Homepage} />
          <Stack.Screen name="shelter" component={Shelter} />
          <Stack.Screen name="tasks" component={Tasks} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}