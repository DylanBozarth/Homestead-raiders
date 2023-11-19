import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import globalStyles from './styles/globalStyle'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={globalStyles.alwaysRed}>Homestead raiders on expo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 1
  },
  whiteText: {
    color: 'white'
  }
});
