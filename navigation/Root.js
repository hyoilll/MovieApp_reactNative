import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tabs";
import Stacks from "./Stacks";

const Nav = createNativeStackNavigator();

const Root = () => {
  return (
    <Nav.Navigator
      screenOptions={{
        headerShown: false,
        presentation: "modal",
      }}
    >
      <Nav.Screen name="Tabs" component={Tabs} />
      <Nav.Screen name="Stacks" component={Stacks} />
    </Nav.Navigator>
  );
};

export default Root;
