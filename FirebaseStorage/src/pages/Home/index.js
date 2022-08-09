import React, { useContext, useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { Feather } from '@expo/vector-icons';

import { getStorage, ref, uploadBytes} from "firebase/storage";
import { storage } from "../../services/firebaseConnection";

import * as ImagePicker from 'expo-image-picker';

import { AuthContext } from "../../contexts/useAuth";

import { 
  Button, 
  ButtonText, 
  Container, 
  ContainerImage, 
  ContainerUploadImage,
  Image,
  UploadImageText
} from "./styled";

export function Home() {
  const { user } = useContext(AuthContext);

  const [image, setImage] = useState(null);

  async function uploadImage() {
    const storageRef = ref(storage, 'picture');
    await uploadBytes(storageRef, image)
    .then(() => console.log('upload concluído.'));
  };

  return (
    <Container>
      <StatusBar backgroundColor="#B28D24" barStyle="dark-content" />
      <ContainerImage>
        {image ? (
          <Image
            source={{uri: `${image.uri}`}}
            resizeMode="cover"
          />
        ): (
          <ContainerUploadImage onPress={pickImage} >
            <Feather name="upload" size={30} color="#2F2F2F" />
            <UploadImageText>{`Selecionar\nImagem`}</UploadImageText>
          </ContainerUploadImage>
        )}
      </ContainerImage>
      <Button onPress={uploadImage}>
        <ButtonText>ENVIAR FOTO</ButtonText>
      </Button>
      <Button
        style={{backgroundColor: '#B52323'}}
        onPress={() => setImage(null)}
      >
        <ButtonText style={{color: '#FFFFFF'}}>
          APAGAR FOTO
        </ButtonText>
      </Button>
    </Container>
  )
}