import { SafeAreaView, View, StyleSheet} from "react-native"
import globalStyle  from '../styles/globalStyle'
import { Text } from "react-native"
export const Navigation = () => {
    return (
    <SafeAreaView>
        <View>
            <Text style={globalStyle.alwaysRed}>Red text</Text>
            <Text>BABBANASNDASDN </Text>
        </View>
    </SafeAreaView>
    )
}

