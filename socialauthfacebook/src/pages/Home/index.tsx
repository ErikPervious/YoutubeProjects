import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';

import styles from './styles';

export function Home() {

  const user = auth().currentUser?.displayName;

  async function onSignOut() {
    await auth().signOut(); 
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.buttonSignOut}
        onPress={onSignOut}
      >
        <Text style={styles.buttonSignOutText}>Sair</Text>
      </TouchableOpacity>
      <Text style={styles.messageText}>
        Olá,{`\n ${user}`}
      </Text>
    </View>
  )
}