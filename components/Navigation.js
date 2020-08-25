import * as React from "react";
import { SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";
import { NavigationContainer } from "@react-navigation/native";

import Game from "../screens/Game";
import Home from "../screens/Home";
import Playing from "../screens/Playing";
import Settings from "../screens/Settings";

const { Navigator, Screen } = createBottomTabNavigator();

export const BottomTabBar = ({ navigation, state }) => (
  <SafeAreaView>
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}
    >
      <BottomNavigationTab title="GAME" />
      <BottomNavigationTab title="TODO" />
      <BottomNavigationTab title="PLAY" />
      <BottomNavigationTab title="SETTINGS" />
    </BottomNavigation>
  </SafeAreaView>
);

export const TabNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen name="Game" component={Game} />
    <Screen name="Todo" component={Home} />
    <Screen name="Play" component={Playing} />
    <Screen name="Settings" component={Settings} />
  </Navigator>
);

export const Navigation = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);
