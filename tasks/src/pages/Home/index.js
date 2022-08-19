import React, { useState } from "react";
import {
  Keyboard,
  StatusBar,
  TouchableWithoutFeedback,
  View 
} from "react-native";

import { Header } from "../../components/Header";
import { NewTask } from "../../components/NewTask";
import { Task } from "../../components/Task";

import { styles } from "./styles";

export function Home() {
  const [newTaskIsVisible, setNewTaskIsVisible] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <StatusBar backgroundColor="#14212B" />
        <Header
          newTaskIsVisible={newTaskIsVisible}
          setNewTaskIsVisible={setNewTaskIsVisible}
        />
        { newTaskIsVisible && <NewTask /> }
        <Task />
      </View>
    </TouchableWithoutFeedback>
  )
};  