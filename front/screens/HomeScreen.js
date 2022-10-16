import React from 'react'
import { View } from 'react-native'
import Header from '../components/Header/Header'
import Home from '../components/Home/Home'

export default function HomeScreen({ navigation }) {

  return (
    <View><Header navigation={navigation}/><Home navigation={navigation}/></View>
  )
}
