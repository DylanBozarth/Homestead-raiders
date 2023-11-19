import { Button, StyleSheet, Text, View } from 'react-native';
import globalStyles from '../styles/globalStyle'
export const Homepage = ({navigation}) => {
    return (
        <View>
           <Text>DA GOMEPAGE</Text> 
           <Button title="Go to shelter" onPress={() => navigation.navigate('shelter')} />
        </View>
        

    )
}