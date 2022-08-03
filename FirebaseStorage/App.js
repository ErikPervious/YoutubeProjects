import React from 'react';
import { LogBox, StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from './src/contexts/useAuth';

import { Routes } from './src/routes';


export default function App() {


  LogBox.ignoreAllLogs();
  return (
    <View style={{flex: 1, backgroundColor: '#2F2F2F'}}>
      <StatusBar backgroundColor="#52525C" />
      <AuthProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </AuthProvider>
    </View>
  );
}