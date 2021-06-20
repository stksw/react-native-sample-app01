import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native'
import { ListItem } from './ListItem'
import { data } from './dummies/articles'
import Constants from 'expo-constants'
import axios from 'axios'

export default function App() {
  const [articles, setArticles] = useState(data)

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
        renderItem={({ item }) => <ListItem title={item.title} author={item.author} urlToImage={item.urlToImage} />}
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
