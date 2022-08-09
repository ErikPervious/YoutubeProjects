import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #2F2F2F;
  align-items: center;
`;
export const ContainerImage = styled.View`
  margin-top: 30px;
  margin-bottom: 15px;
  width: 80%;
  height: 350px;
  background-color: #52525C;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  `;
export const Image = styled.Image`
  width: 80%;
  height: 350px;
`;
export const ContainerUploadImage = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;
export const UploadImageText = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #2F2F2F;
  text-align: center;
`;
export const Button = styled.TouchableOpacity`
  margin-top: 10px;
  padding: 10px 15px;
  background-color: #FCCA3F;
  border-radius: 7px;
`;
export const ButtonText = styled.Text`
  color: #2F2F2F;
  font-weight: bold;
  font-size: 16px;
`;
