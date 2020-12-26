import React, { useState, Component } from "react";
import {
  StyleSheet,
  Modal,
  StatusBar,
  Text,
  Button,
  Image,
  View,
} from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";

export default class Design extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalStatus: false,
    };
  }

  render() {
    function TitleList() {
      return (
        <View style={styles.TextListView}>
          <Text style={styles.ListTitle}>OBJECT LIST</Text>
          <Text style={styles.ListItem}>Toy Device</Text>
          <Text style={styles.ListItem}>Toy Device</Text>
          <Text style={styles.ListItem}>Toy Device</Text>
          <Text style={styles.ListItem}>Toy Device</Text>
          <Text style={styles.ListItem}>Toy Device</Text>
          <Text style={styles.ListItem}>Toy Device</Text>
          <Text style={styles.ListItem}>Toy Device</Text>
          <Text style={styles.ListItem}>Toy Device</Text>
         
        </View>
      );
    }
    let images = [
      {
        url: "http://demo.enginyenice.com/detectedImages/5fe757ed92ad4.jpg",
      },
    ];

    
    return (
      <View style={styles.screen}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalStatus}
        >
          <TitleList />
          <View style={styles.buttonContainer}>
          <Button
          title=" Modal Kapat "
          onPress={() => this.setState({ modalStatus: false })}
          />
          </View>
        </Modal>

        <ImageViewer
          backgroundColor="#fff"
          saveToLocalByLongPress={false}
          style={styles.picture}
          imageUrls={images}
        />

        <View style={styles.buttonContainer}>
          <Button title="Kamerayı Aç"></Button>
          <Button title="Galeriye Git"></Button>
          <Button
            onPress={() => this.setState({ modalStatus: true })}
            title="Resim Detayları"
          ></Button>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    marginTop: StatusBar.currentHeight,
  },
  pictureView: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  picture: {},
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    paddingBottom: 25,
    justifyContent: "space-evenly",
  },
  TextListView: {
    textAlign:"center"
  },
  ListTitle: {
      textAlign:"center",
      fontWeight: "bold",
      fontSize: 40,
      textDecorationLine: "underline",
      color: "red"

  },
  ListItem: {
fontSize: 25
  }
});
