import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import auth from '@react-native-firebase/auth';

import { colors } from "../../styles";
import { styles } from "./styles";
import { showAlert } from "../../utils/showAlert";

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  function Logon() {
    if(email === '' || password === '') {
      Alert.alert('Algo deu errado', 'Preencha todos os campos primeiro');
      return;
    };

    auth().createUserWithEmailAndPassword(email, password)
    .catch(error => showAlert(error.code));
  };

  function Login() {
    setLoading(true);
    if(email === '' || password === '') {
      Alert.alert('Algo deu errado', 'Preencha todos os campos primeiro');
      setLoading(false);
      return;
    };

    auth().signInWithEmailAndPassword(email, password)
    .catch(error => showAlert(error.code));
    setLoading(false);
  };

  function resetPassword() {
    if(email === '') {
      Alert.alert('Algo deu errado', 'Preencha o campo de email para o envio do link de redefinição de senha!')
      return;
    };

    auth().sendPasswordResetEmail(email)
    .then(() => (
      Alert.alert('Email enviado', 'O email para redefinição de senha foi enviado com sucesso!')
    ))
    .catch(error => console.log(error));
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/icon_no_bg.png')}
          style={styles.imageLogo}
        />
        <TextInput
          value={email}
          onChangeText={value => setEmail(value)}
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={colors.BLUE_SECONDARY}
        />
        <View style={styles.containerInputPassword}>
          <TextInput
            value={password}
            onChangeText={value => setPassword(value)}
            style={styles.inputPassword}
            placeholder="Senha"
            placeholderTextColor={colors.BLUE_SECONDARY}
            secureTextEntry={!passwordIsVisible}
          />
          <TouchableOpacity
            onPress={() => setPasswordIsVisible(!passwordIsVisible)}
          >
            <Feather
              name={passwordIsVisible ? 'eye-off' : 'eye'}
              size={25}
              color={colors.BLUE_SECONDARY}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={resetPassword}
        >
          <Text style={styles.textResetPassword}>
            esqueceu a senha?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.containerButtonLogin}
          onPress={Login}
          disabled={loading}
        >
          { loading 
            ? <ActivityIndicator size={25} color={colors.BACKGROUND} />
            : <Text style={styles.textButtonLogin}>ENTRAR</Text>
          }
        </TouchableOpacity>
        <TouchableOpacity onPress={Logon}>
          <Text style={styles.textResetPassword}>
            criar uma conta
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  )
}