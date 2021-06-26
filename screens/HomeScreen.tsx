import React, { useEffect, useState } from 'react'
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { ListItem } from '../component/ListItem'
import Constants from 'expo-constants'
import axios from 'axios'
import { StackParamList } from '../navigation/AppNavigator'
import { Article } from '../entities/article'

type HomeScreenNavigationProp = StackNavigationProp<StackParamList, 'Home'>
type HomeScreenRouteProp = RouteProp<StackParamList, 'Home'>
type Prop = {
  navigation: HomeScreenNavigationProp
  route: HomeScreenRouteProp
}

export const HomeScreen: React.FC<Prop> = ({ navigation, route }) => {
  const [articles, setArticles] = useState<Article[]>([])

  const fetchArticles = async () => {
    try {
      //@ts-ignore
      const url = `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${Constants.manifest.extra.newApiKey}`
      const response = await axios.get(url)
      setArticles(response.data.articles)
    } catch {}
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem article={item} onPress={() => navigation.navigate('Article', { article: item })} />
        )}
        keyExtractor={(_, index) => index.toString()}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
