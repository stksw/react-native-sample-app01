import React from 'react'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import WebView from 'react-native-webview'
import { StackParamList } from '../navigation/AppNavigator'
import { useDispatch } from 'react-redux'
import { addClip, deleteClip } from '../store/actions/user'

type ArticleStackNavigationProp = StackNavigationProp<StackParamList, 'Article'>
type ArticleRouteProp = RouteProp<StackParamList, 'Article'>
type Prop = {
  navigation: ArticleStackNavigationProp
  route: ArticleRouteProp
}

const ArticleScreen: React.FC<Prop> = ({ navigation, route }) => {
  const dispatch = useDispatch()

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => dispatch(addClip({ article: route.params.article }))}>
        <Text>add clip</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(deleteClip({ article: route.params.article }))}>
        <Text>delete clip</Text>
      </TouchableOpacity>
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
