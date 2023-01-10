import React from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  Image, 
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

import styles from './styles';

async function onFacebookButtonPress() {
  const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  const data = await AccessToken.getCurrentAccessToken();

  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
  return auth().signInWithCredential(facebookCredential);
}

export function Login() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Welcome to,
          <Text style={styles.fontBold}>
            {`\n`}SocialAuth
            <Text style={styles.colorBlue}>
              {`\n`}Facebook
            </Text>
          </Text>
        </Text>
        <View style={styles.containerIllustration}>
          <Image
            source={{uri: 'https://www.pngkey.com/png/full/439-4397092_facebook-fb-illustration.png'}}
            style={styles.illustration}
          />
        </View>
        <View style={styles.containerInputs}>
          <TextInput 
            placeholderTextColor='#00000050'
            placeholder='Email' 
            style={styles.input} 
          />
          <TextInput 
            placeholderTextColor='#00000050'
            placeholder='Senha' 
            style={styles.input} 
          />
          <View style={styles.division}>
            <View style={styles.line}></View>
          </View>
          <TouchableOpacity 
            style={styles.buttonFacebook}
            onPress={onFacebookButtonPress}
          >
            <Image 
              style={styles.buttonFacebookImage}
              source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png'}}
            />
            <Text 
              style={styles.buttonFacebookText}
            >
              Continue with Facebook
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}