import React from "react";
import { StatusBar } from "react-native";
import { Feather } from '@expo/vector-icons';

import { 
  Button, 
  ButtonText, 
  Container, 
  ContainerImage, 
  ContainerUploadImage,
  UploadImageText
} from "./styled";

export function Home() {
  return (
    <Container>
      <StatusBar backgroundColor="#B28D24" barStyle="dark-content" />
      <ContainerImage>
        <ContainerUploadImage>
          <Feather name="upload" size={30} color="#2F2F2F" />
          <UploadImageText>{`Selecionar\nImagem`}</UploadImageText>
        </ContainerUploadImage>
      </ContainerImage>
      <Button>
        <ButtonText>ENVIAR FOTO</ButtonText>
      </Button>
      <Button
        style={{backgroundColor: '#B52323'}}
      >
        <ButtonText style={{color: '#FFFFFF'}}>
          APAGAR FOTO
        </ButtonText>
      </Button>
    </Container>
  )
}