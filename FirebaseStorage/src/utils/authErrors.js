import { Alert } from "react-native";

function AlertCustom(msg) {
  return Alert.alert('Atenção', msg);
};

// recebe o código, trata e retorna um aviso!
export function AuthErrors(errorCode) {
  switch (errorCode) {
    case 'auth/user-not-found':
      AlertCustom('Usuário inexistente!');
      break;
    case 'auth/invalid-email':
      alert('Email inválido!');
      break;
    case 'auth/weak-password':
      alert('A senha deve conter mais de 8 caracteres!');
      break;
    default:
      break;
  }
};