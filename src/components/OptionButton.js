import { computed } from 'mobx'
import { inject, observer } from 'mobx-react'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image, Platform, View } from 'react-native'
import images from '../../values/images'

const OptionButton = inject('quizStore')(observer((props) => {
    const quizStore = props.quizStore;
    const isCorrect = computed(() => quizStore.isOptionCorrect(props.apple)).get();
    
    return (
        <TouchableOpacity style={styles.optionButton} onPress={() => quizStore.changeSelection(props.apple)}>
          <Image
            style={styles.optionButtonBackground}
            source={quizStore.showAnswer && isCorrect ? images.correctButton : images.optionButton}
            resizeMode='contain'/>
          {props.selected && <View style={styles.optionSelectedContainer}>
            <Image
              style={styles.optionSelected}
              source={require('../../assets/images/pokeball.png')}/>
          </View>}
          
          <Text style={styles.optionButtonText}>{props.apple}</Text>
        </TouchableOpacity>
    )
}))

export default OptionButton

const styles = StyleSheet.create({
  optionButton: {
    height: 36,
    width: 184,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  optionButtonText: {
    fontFamily: 'PokemonPixelFont',
    color: 'black',
    fontSize: 25,
    zIndex: 2,
    position: 'absolute'
  },
  optionButtonBackground: {
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  optionSelectedContainer: {
    position: 'absolute',
    zIndex: 3,
    height:'100%',
    width:'100%',
    justifyContent: 'center',
    marginLeft: 15,
    marginBottom: 3
  },
  optionSelected: {
    position: 'absolute',
    width: 16,
    height: 16,
    zIndex: 3,
    
  }
})
