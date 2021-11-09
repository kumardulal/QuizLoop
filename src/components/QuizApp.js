import React, { useState, useEffect } from 'react'
import { Button, Image, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native'

import OptionButton from './OptionButton';
import QuestionArea from './QuestionArea';

import images from '../../values/images';
import { getRandomQuestion, useRandomQuestion } from '../hooks/databaseHooks';
import questionsList from '../models/questionsList';
import { inject, observer } from 'mobx-react';

var nextQuestion = false;
const image = { uri: "https://wallpapers-clan.com/wp-content/uploads/2020/08/one-piece-straw-hat-pirates-dark-background-wallpaper-scaled.jpg" };

const QuizApp = inject('quizStore')(observer((props) => {
  const quizStore = props.quizStore;
  const scores = props.score

  return (

    <ImageBackground style={styles.container} source={image}>
      <View style={{
        top: 50,
        height: 60,
        width: 150,
        backgroundColor: "green",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Text style={{
          fontWeight: "bold",
          fontSize: 25, fontFamily: "Aerial",
          color: "white"
        }}>SCORE : {scores}</Text>
      </View>
      <QuestionArea />
      <View style={styles.optionsContainer}>
        {quizStore.currentQuestion.options.map((item, i) => (
          <OptionButton key={i} apple={item} onClick={quizStore.changeSelection}
            selected={quizStore.isSelected(item)} />
        ))}
      </View>
      <View style={styles.submitContainer}>
        <TouchableOpacity style={styles.submitButton} onPress={() => quizStore.submitAnswer(quizStore.currentSelection)}>
          <Image
            style={styles.submitButtonBackground}
            source={images.submitButton}
            resizeMode='contain' />
          <Text style={styles.submitText}> SUBMIT </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>



  )
}))

export default QuizApp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  optionsContainer: {
    width: '100%',
    alignItems: 'center'
  },
  submitContainer: {
    marginVertical: 15,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  submitButtonBackground: {
    width: 214,
    height: 50,
    position: 'absolute',
    zIndex: 1
  },
  submitButton: {
    width: '85%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  submitText: {
    color: 'white',
    fontSize: 35,
    fontFamily: 'PokemonPixelFont',
    zIndex: 2
  }
})
