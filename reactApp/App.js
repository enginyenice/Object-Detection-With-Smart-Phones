import React, { Component } from 'react'
import { View,SafeAreaView} from 'react-native'
import Demo from './demo.js'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <Demo />
      </SafeAreaView>
    )
  }
}
