import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Article } from '../entities/article'

type Prop = {
  article: Article
  onPress: () => void
}

export const ListItem: React.FC<Prop> = ({ article, onPress }) => {
  return (
    <TouchableOpacity style={styles.box} onPress={onPress}>
      <View style={styles.thumbnail}>
        {article.urlToImage !== 'https://www.yomiuri.co.jp/media/2021/06/20210620-OYT1I50062-T.jpg?type=ogp' &&
          !!article.urlToImage && <Image style={{ width: 99, height: 99 }} source={{ uri: article.urlToImage }} />}
      </View>
      <View style={styles.content}>
        <Text numberOfLines={3} style={styles.summary}>
          {article.title}
        </Text>
        <Text style={styles.subText}>{article.author}</Text>
      </View>
    </TouchableOpacity>
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
