import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { styles } from "./styles";

function DeleteButton() {
  return (
    <TouchableOpacity style={styles.containerDelete}>
      <Feather name="check-circle" size={35} color="#3B5368" />
    </TouchableOpacity>
  )
}

export function Task() {
  return (
    <Swipeable
      renderRightActions={() => <DeleteButton />}
      containerStyle={{
        paddingHorizontal: 20,
        marginTop: 10
      }}
    >
      <TouchableOpacity style={styles.container}>
        <Text style={styles.title}>
          Minha Primeira tarefa
        </Text>
      </TouchableOpacity>
    </Swipeable>
  )
}