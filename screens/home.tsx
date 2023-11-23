import { Button, StyleSheet, Text, View } from 'react-native';
import globalStyles from '../styles/globalStyle'
export const Homepage = ({navigation}: {navigation: any}) => {
    return (
        <View>
           <Text>Homepage</Text> 
           <Button title="Go to shelter" onPress={() => navigation.navigate('shelter')} />
        </View>
        

    )
}