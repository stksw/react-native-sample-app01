import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../screens/HomeScreen'
import ArticleScreen from '../screens/ArticleScreen'
import { Article } from '../entities/article'

const Stack = createStackNavigator()

export type StackParamList = {
  Home: undefined
  Article: { article: Article }
}

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Article" component={ArticleScreen} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
