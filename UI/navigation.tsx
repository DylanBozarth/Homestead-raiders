import { SafeAreaView, View, StyleSheet} from "react-native"
import globalStyle  from '../styles/globalStyle'
import { Text } from "react-native"
export const Navigation = () => {
    return (
    <SafeAreaView>
        <View style={styles.container}>
            <View style={styles.topBar}><Text>Top bar</Text></View>
            <View></View>
        </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      zIndex: 99,
      width: '100%',
      backgroundColor: 'black'
    },
    topBar: {
        top: 0,
        borderColor: 'blue'
    },
    bigBlue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    red: {
      color: 'red',
    },
  });