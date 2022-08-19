import React from 'react';
import { StatusBar } from 'react-native';
import { 
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_700Bold
} from '@expo-google-fonts/josefin-sans';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Routes } from './src/routes';

import { colors } from './src/styles';

export default function App() {
  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_700Bold
  });

  if (!fontsLoaded) {
    return null;
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={colors.BACKGROUND}
        barStyle="light-content"
      />
      <Routes />
    </GestureHandlerRootView>
  );
}