import React, { useState, useEffect } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Provider } from 'mobx-react'


import AppLoading from 'expo-app-loading';
import { useCustomFonts } from './src/hooks/useCustomFonts';

import QuizApp from './src/components/QuizApp';
import { getRandomQuestion } from './src/hooks/databaseHooks';
import rootStore from './src/stores/rootStore';

export default function App() {
  let [fontsLoaded] = useCustomFonts();
  // const [result, setResult] = useState(window.localStorage.getItem("score"))
  const score = window.localStorage.getItem("score")




  if (!fontsLoaded) {
    console.log('not loaded');
    return (
      <AppLoading />
    );
  }

  return (
    <Provider
      rootStore={rootStore}
      questionStore={rootStore.questionStore}
      quizStore={rootStore.quizStore}>
      <QuizApp score={score} ></QuizApp>
    </Provider>
  );

}

const styles = StyleSheet.create({

});
