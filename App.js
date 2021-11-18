import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import login from "./src/components/screens/LoginScreen";
import signup from "./src/components/screens/SignupScreen";
import homepage from "./src/components/screens/HomeScreen";

export default function App() {
  const MainNavigator = createStackNavigator();
  return(
    <NavigationContainer>
      <MainNavigator.Navigator screenOptions={{headerShown: false}} initialRouteName={login}>
        <MainNavigator.Screen name="login" component={login} />
        <MainNavigator.Screen name="signup" component={signup} />
        <MainNavigator.Screen name="homepage" component={homepage} />
      </MainNavigator.Navigator>
    </NavigationContainer>

  )
};