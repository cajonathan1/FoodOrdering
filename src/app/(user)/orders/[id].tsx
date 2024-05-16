import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function OrderDetailsScreen() {
    const { id } = useLocalSearchParams();

    return(
        <View>
            <Stack.Screen options={{ title: `Order #${id}` }} />
            <Text>Order details: {id}</Text>
        </View>
    ); 
}