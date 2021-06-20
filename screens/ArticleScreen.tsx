import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'
import WebView from 'react-native-webview'
import { StackParamList } from '../navigation/AppNavigator'

type ArticleStackNavigationProp = StackNavigationProp<StackParamList, 'Article'>
type ArticleRouteProp = RouteProp<StackParamList, 'Article'>
type Prop = {
  navigation: ArticleStackNavigationProp
  route: ArticleRouteProp
}

const ArticleScreen: React.FC<Prop> = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: route.params.article.url }} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

export default ArticleScreen
