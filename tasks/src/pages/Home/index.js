import React, { useState } from "react";
import {
  Keyboard,
  StatusBar,
  TouchableWithoutFeedback,
  View,
  Text
} from "react-native";

import { Header } from "../../components/Header";
import { NewTask } from "../../components/NewTask";
import { Task } from "../../components/Task";

import { styles } from "./styles";

export function Home() {
  const [tasks, setTasks] = useState([]);
  const [finishedTasks, setFinishedTasks] = useState([]);
  const [newTaskIsVisible, setNewTaskIsVisible] = useState(false);

  function addNewTask(content) {
    let id = tasks.length === 0 ? 0 : (tasks.length + 1) - 1;

    const taskObject = {id: id, content: content};
    let newTasks = [...tasks, taskObject];

    newTasks.sort((a, b) => {
      if(a.id > b.id) return -1
      else return true;
    });

    setTasks(newTasks);
  };

  function taskCompleted(id) {
    let filter = tasks.filter(item => item.id !== id);
    setTasks(filter);

    const taskFiltered = tasks.filter(item => item.id === id);
    let newFinishedTasks = finishedTasks;

    newFinishedTasks.push({
      id: (finishedTasks.length + 1) - 1,
      content: taskFiltered[0].content,
      isFinished: true
    });

    newFinishedTasks.sort((a, b) => {
      if(a.id > b.id) return -1
      else return true;
    });

    setFinishedTasks(newFinishedTasks);
  };

  function deleteTask(id) {
    const filter = finishedTasks.filter(item => item.id !== id);
    setFinishedTasks(filter);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <StatusBar backgroundColor="#14212B" />
        <Header
          newTaskIsVisible={newTaskIsVisible}
          setNewTaskIsVisible={setNewTaskIsVisible}
        />
        { newTaskIsVisible && <NewTask addNewTask={addNewTask} /> }
        {tasks.map((item) => (
          <Task key={item.id} data={item} action={(id) => taskCompleted(id)} />
        ))}
        {finishedTasks.length !== 0 && (
          <>
            <View style={styles.containerDivision}>
              <View style={styles.finishedLine}/>
              <Text style={styles.finishedText}>finalizadas</Text>
              <View style={styles.finishedLine}/>
            </View>
            {finishedTasks.map((item) => (
              <Task key={item.id} data={item} action={(id) => deleteTask(id)} />
            ))}
          </>
        )}
      </View>
    </TouchableWithoutFeedback>
  )
};  