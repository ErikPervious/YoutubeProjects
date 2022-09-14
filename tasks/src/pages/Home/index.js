import React, { useState, useEffect } from "react";
import {
  Keyboard,
  StatusBar,
  TouchableWithoutFeedback,
  View,
  Text,
  ScrollView
} from "react-native";

import auth, { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import { Header } from "../../components/Header";
import { NewTask } from "../../components/NewTask";
import { Task } from "../../components/Task";
import { Loading } from "../../components/Loading";

import { randomKey } from "../../utils/randomKey";

import { styles } from "./styles";

export function Home() {
  const [tasks, setTasks] = useState([]);
  const [finishedTasks, setFinishedTasks] = useState([]);
  const [newTaskIsVisible, setNewTaskIsVisible] = useState(false);
  const [downloadingTasks, setDownloadingTasks] = useState(true);

  const userUid = auth().currentUser.uid;

  function addNewTask(content) {
    const taskObject = {
      id: randomKey(),
      content: content,
      isFinished: false,
      date: firebase.firestore.FieldValue.serverTimestamp()
    };

    firestore().collection(userUid).add(taskObject)
    .then(() => {
      setTasks([taskObject, ...tasks])
    })
  };

  function taskCompleted(id) {
    setTasks(tasks.filter(item => item.id !== id));

    const taskCompleted = tasks.filter(item => item.id === id);
    let newFinishedTasks = finishedTasks;

    const taskObject = {
      id: randomKey(),
      content: taskCompleted[0].content,
      isFinished: true,
      date: taskCompleted[0].date
    };

    firestore().collection(userUid).where('content', '==', taskObject.content).get()
    .then(({docs}) => {
      firestore().collection(userUid).doc(docs[0].id).update(taskObject)
      .then(() => setFinishedTasks([taskObject, ...newFinishedTasks]))
    })
  };

  function deleteTask(id) {
    const filter = finishedTasks.filter(item => item.id !== id);
    const taskFiltered = finishedTasks.filter(item => item.id === id);
    
    firestore().collection(userUid).where('content', '==', taskFiltered[0].content).get()
    .then(({docs}) => {
      firestore().collection(userUid).doc(docs[0].id).delete()
      .then(() => setFinishedTasks(filter));
    })
  };

  useEffect(() => {
    function getTasksInFirestore() {
      const tasks = firestore().collection(userUid).where('isFinished', '==', false).orderBy('date', 'asc').get()
      .then(({docs}) => {
        let tasksResponse = [];
        docs.map(item => tasksResponse.push(item.data()));
        setTasks(tasksResponse);
      });
      const tasksFinished = firestore().collection(userUid).where('isFinished', '==', true).orderBy('date', 'desc').get()
      .then(({docs}) => {
        let tasksFinishedResponse = [];
        docs.map(item => tasksFinishedResponse.push(item.data()));
        setFinishedTasks(tasksFinishedResponse);
      });
      setDownloadingTasks(false);
    };
    getTasksInFirestore();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <StatusBar backgroundColor="#14212B" />
        <Header
          newTaskIsVisible={newTaskIsVisible}
          setNewTaskIsVisible={setNewTaskIsVisible}
        />
        { newTaskIsVisible && <NewTask addNewTask={addNewTask} /> }
        {downloadingTasks 
          ? <Loading text="Buscando tarefas..." />
          : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 50}}
          >
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
          </ScrollView>
        )}
      </View>
    </TouchableWithoutFeedback>
  )
};  