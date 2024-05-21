import { Text, View, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function EventsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Events Go Here!</Text>
      <Button
        onPress={() => {
          navigation.navigate("Event Details");
        }}
        title="See details"
      />
    </View>
  );
}

function EventsSecondScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Events Second Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function EventsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Events" component={EventsScreen} />
      <Stack.Screen name="Event Details" component={EventsSecondScreen} />
    </Stack.Navigator>
  );
}
