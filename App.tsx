import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { AppNavigator } from './navigation/AppNavigator'
import { Provider } from 'react-redux'
import store from './store'

export default function App() {
  console.log('store', store.getState())
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}
