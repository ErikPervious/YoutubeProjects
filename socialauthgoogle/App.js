import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import { Login } from './src/pages/login';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  GoogleSignin.configure({
    webClientId: '1087404221309-jkubj7tduugpfhk9ipk4gfdeqq7affsi.apps.googleusercontent.com',
  });
  
  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  async function signOut() {
    await auth().signOut()
    .then(async () => {
      await GoogleSignin.signOut()
      .then(() => setUser(null));
    })
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return <Login />;
  }

  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 40, backgroundColor: '#121212'}}>
      <Text style={{fontSize: 20, color: '#e1e1e1', textAlign: 'center'}}>{`Welcome \n${user.email}`}</Text>
      <Button title="sair" onPress={signOut}/>
    </View>
  );
}