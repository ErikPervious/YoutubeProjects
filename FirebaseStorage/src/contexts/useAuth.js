import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { auth } from "../services/firebaseConnection";
import { AuthErrors } from "../utils/authErrors";

export const AuthContext = createContext('');

export function AuthProvider({children}) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingStorage, setLoadingStorage] = useState(true);

  async function SignIn(name, email, password) {
    setLoading(true);

    await signInWithEmailAndPassword(auth, email, password)
    .then(async () => {
      const user = { name: name, email: email }
      setUser(user);
      await SaveUser(user);
      setLoading(false);
    })
    .catch(error => AuthErrors(error.code));
    setLoading(false);
  };
  
  async function SignOn(name, email, password) {
    setLoading(true);

    await createUserWithEmailAndPassword(auth, email, password)
    .then(async () => {
      const user = { name: name, email: email }
      setUser(user);
      await SaveUser(user);
      setLoading(false);
    })
    .catch(error => AuthErrors(error.code));
    setLoading(false);
  };

  async function SignOut() {
    await signOut(auth)
    .then(async () => {
      await AsyncStorage.removeItem('user');
      setUser(null);
    });
  };

  async function SaveUser(user) {
    await AsyncStorage.setItem('user', JSON.stringify(user));
  };

  useEffect(() => {
    async function getStorage() {
      const response = await AsyncStorage.getItem('user');
      if(response) {
        setUser(JSON.parse(response));
        setLoadingStorage(false);
      };
      setLoadingStorage(false);
    };
    getStorage();
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      SignIn,
      SignOn,
      SignOut,
      loading,
      loadingStorage
    }}>
      {children}
    </AuthContext.Provider>
  )
}