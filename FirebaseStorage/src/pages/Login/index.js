import React, { useContext, useState } from "react";
import { ActivityIndicator, Keyboard, TouchableWithoutFeedback } from "react-native";
import AppLoading from 'expo-app-loading';

import { Input } from "../../components/Input";
import { AuthContext } from "../../contexts/useAuth";

import { 
  ButtonLogin,
  ButtonLoginText,
  ButtonSignOn,
  ButtonSignOnText,
  Container, 
  ContainerInputs, 
  Image,
} from "./styled";

export function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const fireIcon = require('../../assets/fireIcon.png');

  const { 
    SignIn, 
    SignOn, 
    loading,
    loadingStorage
  } = useContext(AuthContext);

  function handleSignIn() {
    if(name === '' || email === '' || pass === '') return;
    Keyboard.dismiss();
    SignIn(name, email, pass);
  };

  function handleSignOn() {
    if(name === '' || email === '' || pass === '') return;
    Keyboard.dismiss();
    SignOn(name, email, pass);
  };

  if(loadingStorage) return <AppLoading />
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Image
          source={fireIcon}
          resizeMode="contain"
        />
        <ContainerInputs>
          <Input
            value={name}
            onChange={newValue => setName(newValue)}
            iconName="user"
            placeholder="Nome"
            type="default"
          />
          <Input
            value={email}
            onChange={newValue => setEmail(newValue)}
            iconName="mail"
            placeholder="Email"
            type="email-address"
          />
          <Input
            value={pass}
            onChange={newValue => setPass(newValue)}
            iconName="key"
            placeholder="Senha"
            type="visible-password"
          />
        </ContainerInputs>
        <ButtonLogin 
          onPress={handleSignIn}
          disabled={loading}
        >
          {loading 
            ? <ActivityIndicator size={30} color="#2F2F2F" />
            : <ButtonLoginText>CONTINUAR</ButtonLoginText>
          }
        </ButtonLogin>
        <ButtonSignOn onPress={handleSignOn}>
          <ButtonSignOnText>criar uma nova conta</ButtonSignOnText>
        </ButtonSignOn>
      </Container>
    </TouchableWithoutFeedback>
  )
}