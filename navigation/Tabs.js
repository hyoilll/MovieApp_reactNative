import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { tab_navigation_items } from "../data/data";
import { ThemeConsumer } from "styled-components/native";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    // import {DarkTheme, DefaultTheme} from "@react-navigation/native";
    // 上記のthemeで簡単にdark modeを対応できるようになる。
    // <NavigationContainer theme={DarkTheme}></NacigationContainer>
    <ThemeConsumer>
      {(theme) => (
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
      )}
    </ThemeConsumer>
  );
};

export default Tabs;
