import React, { useContext } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';

import { Login } from "../pages/Login";
import { Home } from "../pages/Home";

import { AuthContext } from "../contexts/useAuth";
import { TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();

export function Routes() {

  const { user, SignOut } = useContext(AuthContext);

  if(user) return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {backgroundColor: '#FCCA3F'},
          headerTitleStyle: {fontWeight: '600'},
          headerLeft: () => (
          <TouchableOpacity onPress={() => SignOut()}>
            <Feather 
              name="log-out" 
              size={25} 
              color="#2F2F2F"
              style={{marginRight: 10}}
            />
          </TouchableOpacity>
          )
        }}
      />
    </Stack.Navigator>
  )
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
};