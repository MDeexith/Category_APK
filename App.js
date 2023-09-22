import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./pages/homescreen";
import CategoryScreen from "./pages/categories";

const stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={HomeScreen}/>
        <stack.Screen name="Category" component={CategoryScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
