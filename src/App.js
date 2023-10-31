import React from "react";
import { createTheme, ThemeProvider } from "@rneui/themed";
import Component from "../components/MyComponent";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserList from "./views/UserList";
import UserForm from "./views/UserForm";

const theme = createTheme({
  lightColors: {},
  darkColors: {},
});

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UserList"
        screenOptions={screenOptions}
      >
        <Stack.Screen 
          name="UserList"
          component={UserList}
        />
        <Stack.Screen
          name="UserForm"
          component={UserForm}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const screenOptions = {
  
}