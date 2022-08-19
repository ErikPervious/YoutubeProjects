import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons';

import { styles } from "./styles";

export function NewTask() {
  const [task, setTask] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        value={task}
        onChangeText={value => setTask(value)}
        style={styles.input}
        placeholder="Qual sua tarefa?"
        placeholderTextColor="#14212B"
      />
      <View style={styles.containerButtons}>
        <TouchableOpacity 
          style={styles.buttonClearTask}
          onPress={() => {}}
        >
          <Feather name="delete" size={30} color="#3B5368" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.buttonAddTask}
          onPress={() => {}}
        >
          <Text style={styles.buttonAddText}>ADICIONAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}