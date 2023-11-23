import { Text, View, Button} from "react-native"

export const Shelter = ({navigation}: {navigation: any}) => {
    return (
        <View>
            <Text>SHELTA</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
        
    )
}