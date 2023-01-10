import React, { useState, useEffect } from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import { Settings } from 'react-native-fbsdk-next';

import { Login } from './src/pages/Login';
import { Home } from './src/pages/Home';

export default function App() {
  // Set an initializing state whilst Firebase connects
  const [loading, setLoading] = useState<Boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();

  Settings.setAppID('1330899974334753');

  useEffect(() => {
    auth().onAuthStateChanged(userState => {
      setUser(userState);

      if(loading) {
        setLoading(false);
      }
    })
  }, []);
  
  if (loading) return null;

  if (!user) {
    return (
      <Login />
    );
  }

  return (
    <Home />
  );
}