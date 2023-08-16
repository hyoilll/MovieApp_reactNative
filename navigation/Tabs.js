import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BLACK_COLOR, WHITE_COLOR, tab_navigation_items } from "../data/data";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDarkMode = useColorScheme() === "dark" ? true : false;

  return (
    // import {DarkTheme, DefaultTheme} from "@react-navigation/native";
    // 上記のthemeで簡単にdark modeを対応できるようになる。
    // <NavigationContainer theme={DarkTheme}></NacigationContainer>
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
        tabBarLabelStyle: {
          fontWeight: "bold",
        },
      }}
    >
      {Object.keys(tab_navigation_items).map((key) => {
        const navigation_item = tab_navigation_items[key];
        return (
          <Tab.Screen
            key={key}
            name={navigation_item.name}
            component={navigation_item.component}
            options={{
              tabBarIcon: ({ focused, color, size }) => {
                return (
                  <Ionicons
                    name={
                      focused
                        ? navigation_item.icon_focused
                        : navigation_item.icon_notFocused
                    }
                    size={size}
                    color={color}
                  />
                );
              },
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default Tabs;
