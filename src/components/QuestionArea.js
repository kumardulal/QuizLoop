import { inject, observer } from 'mobx-react'
import React from 'react'
import { Image, Platform, StyleSheet, Text, TouchableWithoutFeedbackBase, View } from 'react-native'

const QuestionArea = inject('quizStore')(observer((props) => {
    return (
        <View style={styles.questionArea}>
            <Text style={styles.questionText}> Guess this Pirate! </Text>
            <Image style={styles.pokemonImage} source={{uri:props.quizStore.currentQuestion.imageUrl}} resizeMode='contain'/>
        </View>
    );
}))

export default QuestionArea

const styles = StyleSheet.create({
    questionArea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    pokemonImage: {
        border: 'ridge 7px brown',
        width: '50%',
        aspectRatio: 1/1,
        // For some reason, this is needed for web
        // android is fine without this style prop
        ...Platform.select({
            web: {
                height: '50%'
            }
        })
    },
    questionText: {
        color: 'white', 
        fontFamily: 'PokemonPixelFont',
        fontSize: 52,
        marginBottom: 20
    }
})
