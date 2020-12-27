import React, { useState } from "react";
import { StyleSheet, Text, StatusBar, View } from "react-native";
import Home from "./Screen/Home";
import ObjectDetection from "./Screen/ObjectDetection";
import Gallery from "./Screen/Gallery";

const App = () => {

  const [selectScreen, setSelectScreen] = useState("home");



  let screen = <Text>Default</Text>;
  function changeScreen(params) {
    setSelectScreen(params);
  }

  if (selectScreen == "home")
    screen = (
      <Home
        data={{
          selectScreen: selectScreen,
          changeScreen: changeScreen.bind(this),
        }}
      />
    );
  else if (selectScreen == "object")
    screen = (
      <ObjectDetection
        data={{
          selectScreen: selectScreen,
          changeScreen: changeScreen.bind(this),
        }}
      />
    );
  else if (selectScreen == "gallery")
    screen = (
      <Gallery
        data={{
          selectScreen: selectScreen,
          changeScreen: changeScreen.bind(this),
        }}
      />
    );

  return <View style={styles.screen}>{screen}</View>;
};

export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    marginTop: StatusBar.currentHeight,
  },
});
