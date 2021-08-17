import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "../screens/HomeScreen";
import { UserDetailsScreen } from "../screens/UserDetailsScreen";

const MainStack = createStackNavigator();

export const Main = () => (
  <MainStack.Navigator screenOptions={{ 
    headerTintColor : "white",
    headerTitleStyle: { alignSelf : 'center'},
    headerStyle: {
      backgroundColor: 'black',
  }}}>
    <MainStack.Screen name="Home" component={HomeScreen} />
    <MainStack.Screen
      name="UserDetails"
      component={UserDetailsScreen}
      options={{ headerTitle: "User Details" }}
    />
  </MainStack.Navigator>
);
