import React, { useEffect, useMemo, useReducer, useState } from "react";
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

import Animated from 'react-native-reanimated';
import { MotiImage, MotiView, AnimatePresence } from "moti";
import { MotiPressable } from "moti/interactions";

import { colors } from "../../styles";
import { styles } from "./styles";
import { showAlert } from "../../utils/showAlert";

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const [visible, toggle] = useReducer((s) => !s, false);  
  const [message, setMessage] = useState("");

  function Logon() {
    if(email === '' || password === '') {
      setMessage("Preencha todos os campos primeiro");
      toggle();
      return;
    };

    auth().createUserWithEmailAndPassword(email, password)
    .catch(error => showAlert(error.code));
  };

  function Login() {
    setLoading(true);
    if(email === '' || password === '') {
      setMessage("Preencha todos os campos primeiro");
      toggle();
      setLoading(false);
      return;
    };

    auth().signInWithEmailAndPassword(email, password)
    .catch(error => showAlert(error.code));
    setLoading(false);
  };

  function resetPassword() {
    if(email === '') {
      setMessage("Preencha o campo de email para o envio do link de redefinição de senha!");
      toggle();
      return;
    };

    auth().sendPasswordResetEmail(email)
    .then(() => (
      setMessage("O email para redefinição de senha foi enviado com sucesso!"),
      toggle()
    ))
    .catch(error => {
      setMessage(error.message),
      toggle()
    });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <>
        <View style={{flex: 1, backgroundColor: colors.BLUE_PRIMARY}}>
          <AnimatePresence>
            <MotiView
              style={styles.container}
              from={{opacity: visible ? 0.5 : 1 }}
              transition={{ type: 'timing', duration: 100 }}
            >
              <MotiImage
                source={require('../../assets/icon_no_bg.png')}
                style={styles.imageLogo}
                from={{ top: -50, opacity: 0 }}
                animate={{ top: 0, opacity: 1}}
                transition={{
                  type: 'spring', duration: 300
                }}
              />
              <MotiView
                style={{width: '100%', alignItems: "center"}}
                from={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: 'timing', duration: 300 }}
              >
                <TextInput
                  value={email}
                  onChangeText={value => setEmail(value)}
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor={colors.BLUE_SECONDARY}
                  editable={!visible}
                />
                <View style={styles.containerInputPassword}>
                  <TextInput
                    value={password}
                    onChangeText={value => setPassword(value)}
                    style={styles.inputPassword}
                    placeholder="Senha"
                    placeholderTextColor={colors.BLUE_SECONDARY}
                    secureTextEntry={!passwordIsVisible}
                    editable={!visible}
                  />
                  <TouchableOpacity
                    onPress={() => setPasswordIsVisible(!passwordIsVisible)}
                    disabled={visible}
                  >
                    <Feather
                      name={passwordIsVisible ? 'eye-off' : 'eye'}
                      size={25}
                      color={colors.BLUE_SECONDARY}
                    />
                  </TouchableOpacity>
                </View>
              </MotiView>
              <MotiPressable
                onPress={resetPassword}
                disabled={visible}
                from={{ opacity: 0 }}
                animate={useMemo(() => ({hovered, pressed}) => {
                  'worklet'
                  return { opacity: hovered || pressed ? 0 : 1 }
                })}
                transition={{
                  type: 'timing', duration: 300
                }}
              >
                <Text style={styles.textResetPassword}>
                  esqueceu a senha?
                </Text>
              </MotiPressable>
              <MotiView
                style={{width: '100%', alignItems: "center"}}
                from={{ bottom: -50, opacity: 0 }}
                animate={{ bottom: 0, opacity: 1 }}
                transition={{ type: 'spring', duration: 300 }}
              >
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
                <TouchableOpacity 
                  onPress={Logon} 
                  disabled={visible}
                >
                  <Text style={styles.textResetPassword}>
                    criar uma conta
                  </Text>
                </TouchableOpacity>
              </MotiView>
            </MotiView>
          </AnimatePresence>
        </View>
      <AnimatePresence>
        { visible &&
          <MotiView 
            style={styles.containerMessage}
            from={{ opacity: 0, bottom: -35 }}
            animate={{ opacity: 1, bottom: 20 }}
            exit={{ opacity: 0, bottom: -35 }}
            transition={{ type: 'timing', duration: 200 }}
          >
            <View style={styles.containerMessageText}>
              <Text style={styles.messageText}>{message}</Text>
            </View>
            <TouchableOpacity 
              style={styles.messageButton}
              onPress={toggle}
            >
              <Text style={styles.messageButtonText}>OK</Text>
            </TouchableOpacity>
          </MotiView>
        }
        </AnimatePresence>
      </>
    </TouchableWithoutFeedback>
  )
}