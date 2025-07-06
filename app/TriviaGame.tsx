import React from 'react'
import { Text, View } from 'react-native'

export default function TriviaGame() {
  return (
    <View>
      <Text>Trivia Game</Text>
    </View>
  )
}

/**
 * Host creates a game and creates a join code -> friends able to join the game
 * 
 * Everyone votes on a category, retrieve a question from the endpoint with the category as a parameter
 * 
 * multiple choice? or written answers? entered and then points awarded based on correctness and 
 */