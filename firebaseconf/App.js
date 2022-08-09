import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import auth from '@react-native-firebase/auth';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function createUser() {
    auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert('A conta foi criada.')
    })
    .catch(error => console.log(error));
  };

  function signIn() {
    auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      alert('Usuário logado com sucesso!')
    })
    .catch(error => console.log(error));
  }

  function logout() {
    auth().signOut()
    .then(() => { 
      alert('Usuário saiu com sucesso!')
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
      <Text style={styles.subtitle}>{`Melhorei um pouco a interface para vocês <3.`}</Text>
      <TextInput
        value={email}
        onChangeText={value => setEmail(value)}
        style={styles.input}
        placeholder="Digite seu email"
      />
      <TextInput
        value={password}
        onChangeText={value => setPassword(value)}
        style={styles.input}
        placeholder="Digite sua senha"
      />
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={createUser}
        >
          <Text>CADASTRAR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={signIn}
        >
          <Text>ENTRAR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={logout}
        >
          <Text>SAIR</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 18,
    marginBottom: 0
  },
  subtitle: {
    marginBottom: 20,

    opacity: 0.5
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#121313',
    marginBottom: 10,
    borderRadius: 7,
    padding: 10
  },
  buttons: {
    width: '100%',
    alignItems: "center",
    marginTop: 10,
  },
  button: {
    width: '80%',
    marginBottom: 10,
    padding: 10,
    borderRadius: 7,
    backgroundColor: '#212121',
    alignItems: "center"
  }
});