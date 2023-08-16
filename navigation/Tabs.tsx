import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { tab_navigation_items } from "../data/data";
import { useTheme } from "styled-components";

export type TabNavigationItem = {
  name: string;
  component: React.ComponentType<any>; // ここで適切な型を指定
  icon_focused: string;
  icon_notFocused: string;
};

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const theme = useTheme();

  return (
    // import {DarkTheme, DefaultTheme} from "@react-navigation/native";
    // 上記のthemeで簡単にdark modeを対応できるようになる。
    // <NavigationContainer theme={DarkTheme}></NacigationContainer>
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.mainBgColor,
        },
        tabBarActiveTintColor: theme.textColor,
        headerStyle: {
          backgroundColor: theme.mainBgColor,
        },
        headerTintColor: theme.textColor,
        tabBarLabelStyle: {
          fontWeight: "bold",
        },
      }}
    >
      {Object.keys(tab_navigation_items).map((key) => {
        const navigation_item: TabNavigationItem =
          tab_navigation_items[
            key as unknown as keyof typeof tab_navigation_items
          ];
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
