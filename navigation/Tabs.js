import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import { BLACK_COLOR, WHITE_COLOR } from "../data/data";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDarkMode = useColorScheme() === "dark" ? true : false;

  return (
    // import {DarkTheme, DefaultTheme} from "@react-navigation/native";
    // 上記のthemeで簡単にdark modeを対応できるようになる。
    // <NavigationContainer theme={DarkTheme}></NacigationContainer>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: isDarkMode ? BLACK_COLOR : WHITE_COLOR,
          },
          tabBarActiveTintColor: isDarkMode ? WHITE_COLOR : BLACK_COLOR,
          headerStyle: {
            backgroundColor: isDarkMode ? BLACK_COLOR : WHITE_COLOR,
          },
          headerTintColor: isDarkMode ? WHITE_COLOR : BLACK_COLOR,
        }}
      >
        <Tab.Screen name="Movies" component={Movies} />
        <Tab.Screen name="Tv" component={Tv} />
        <Tab.Screen name="Search" component={Search} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;
