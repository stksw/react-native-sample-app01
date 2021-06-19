import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native'
import { ListItem } from './ListItem'
import { data } from './dummies/articles'

export default function App() {
  const [articles, setArticles] = useState(data)

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
