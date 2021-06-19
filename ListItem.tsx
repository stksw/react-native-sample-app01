import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export type Article = {
  title: string
  author: string
  urlToImage: string
}

export const ListItem: React.FC<Article> = ({ title, author, urlToImage }) => {
  return (
    <View style={styles.box}>
      <View style={styles.thumbnail}>
        <Image style={{ width: 99, height: 99 }} source={{ uri: urlToImage }} />
      </View>
      <View style={styles.content}>
        <Text numberOfLines={3} style={styles.summary}>
          {title}
        </Text>
        <Text style={styles.subText}>{author}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
  },
  thumbnail: {
    width: 100,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'space-between',
  },
  summary: {
    fontSize: 14,
  },
  subText: {
    color: '#999',
    fontSize: 12,
  },
})
