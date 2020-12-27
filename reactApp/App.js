import React, {useState} from 'react'
import { StyleSheet, Text,StatusBar, View } from 'react-native'
import Home from "./Screen/Home"
import ObjectDetection from "./Screen/ObjectDetection"



const App = () => {
  const [selectScreen, setSelectScreen] = useState("object");
  let screen = <Text>Default</Text>

  if(selectScreen == "home")
    screen = <Home />
  else if(selectScreen == "object")
    screen = <ObjectDetection />


  return (
    <View style={styles.screen}>
      {screen}
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    marginTop: StatusBar.currentHeight,
  },
});