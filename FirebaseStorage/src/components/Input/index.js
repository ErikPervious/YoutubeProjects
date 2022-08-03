import React, { useState } from "react";
import { Feather } from '@expo/vector-icons';

import { 
  Container, 
  InputArea 
} from "./styled";

export function Input({value, onChange, iconName, placeholder, type}) {

  return (
    <Container>
      <Feather
        name={iconName}
        size={25}
        color={value.length != 0 ? "#2F2F2F" : "#2F2F2F70"}
      />
      <InputArea
        value={value}
        onChangeText={newValue => onChange(newValue)}
        placeholder={placeholder}
        placeholderTextColor="#2F2F2F70"
        keyboardType={type}
      />
    </Container>
  )
}