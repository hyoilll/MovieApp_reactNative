import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import Tabs from "./Tabs";

const Stack = createNativeStackNavigator();

const One = ({ navigation }) => {
  return (
    <View>
      <Text>One Screen</Text>
      <Button
        title="Go Back (Go to Movie home)"
        onPress={() => navigation.goBack()}
      ></Button>
      <Button
        title="Go to Two"
        onPress={() => navigation.navigate("Two")}
      ></Button>
    </View>
  );
};
const Two = ({ navigation }) => {
  return (
    <View>
      <Text>Two Screen</Text>
      <Button
        title="Go back (Go to One)"
        onPress={() => navigation.goBack()}
      ></Button>
      <Button
        title="Go to Three"
        onPress={() => navigation.navigate("Three")}
      ></Button>
    </View>
  );
};
const Three = ({ navigation }) => {
  return (
    <View>
      <Text>Three Screen</Text>
      <Button
        title="Go Back (Go to Two)"
        onPress={() => navigation.goBack()}
      ></Button>
    </View>
  );
};

const Stacks = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name="One" component={One} />
      <Stack.Screen name="Two" component={Two} />
      <Stack.Screen name="Three" component={Three} />
    </Stack.Navigator>
  );
};

export default Stacks;
