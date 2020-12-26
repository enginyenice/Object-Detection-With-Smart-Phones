import React, { useState, useEffect, Component } from "react";
import { StyleSheet, Modal, StatusBar, Button, View, Text } from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import * as ImagePicker from "expo-image-picker";



const Exam = () => {
  const [image, setImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [resultDetails, setResultDetails] = useState(null);
  const [status, setStatus] = useState(null);
  const [detailStatus, setDetailStatus] = useState(false);
  const [showImage, setShowImage] = useState([
    { url: "https://www.google.com.tr/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png" },
  ]);

  useEffect(() => {
    (async () => {
      setStatus("none");
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);
  let pickImage = async () => {
    setImage(null);
    setResultDetails(null);
    setResultDetails(null);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "Images",
      allowsEditing: false,
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      uploadImages(result);
      setStatus("selected");
      setShowImage([
        {
          url: result.uri,
        },
      ]);
    }
  };
  let pickCamera = async () => {
    setImage(null);
    setResultDetails(null);
    setResultDetails(null);
    //ImagePicker.launchCameraAsync(options)

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: "Images",
      allowsEditing: false,
      quality: 1,
    });

    if (!result.cancelled) {
      {
        setImage(result.uri);
        uploadImages(result);
        setStatus("selected");
        setShowImage([
          {
            url: result.uri,
          },
        ]);
      }
    }
  };
  let uploadImages = async (result) => {
    let path;
    let details;
    let body = new FormData();
    body.append("photo", {
      uri: result.uri,
      name: "photo.jpg",
      filename: "photo.jpg",
      type: "image/jpg",
    });
    body.append("Content-Type", "image/jpg");

    fetch("http://demo.enginyenice.com/index.php", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        otherHeader: "foo",
      },
      body: body,
    })
      .then((res) => res.json())
      .then((res) => {
        setResultImage(res[0]["path"]);
        setResultDetails(res[0]["detail"]);
        setStatus("result");
        console.log(res[0]["path"]);
        setShowImage([{ url: res[0]["path"] }]);
      })
      .catch((e) => console.log(e))
      .done();
  };

  function TitleList() {
    const listItems = resultDetails.map((detail, key) => (
      <Text key={key} style={{
        fontSize: 25,
        color: "rgb("+detail.red+","+detail.green+","+detail.blue+")"
      }}>
        {" "}
        {key + 1} - {detail.title}
      </Text>
    ));
    return (
      <View style={styles.TextListView}>
        <Text style={styles.ListTitle}>OBJECT LIST</Text>
        {listItems}
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      {resultImage && image && resultDetails && (
          <>
            <Modal
              animationType="slide"
              transparent={false}
              //visible={this.state.modalStatus}
              visible={detailStatus}
            >
              <TitleList />
              <View style={styles.buttonContainer}>
                <Button
                  title=" Modal Kapat "
                  onPress={() => setDetailStatus(false)}
                />
              </View>
            </Modal>
            <ImageViewer
              backgroundColor="#fff"
              saveToLocalByLongPress={false}
              style={styles.picture}
              imageUrls={showImage}
            />
          </>
        )}

      {image && !resultImage && (
        <ImageViewer
          backgroundColor="#fff"
          saveToLocalByLongPress={false}
          style={styles.picture}
          imageUrls={showImage}
        />
      )}

        {
            !image && !resultImage && (
                <ImageViewer
            backgroundColor="#fff"
            saveToLocalByLongPress={false}
            style={styles.picture}
            imageUrls={showImage}
        />
            )
        }
      <View style={styles.buttonContainer}>
        <Button onPress={pickCamera} title="Kamerayı Aç"></Button>
        <Button onPress={pickImage} title="Galeriye Git"></Button>
        {
            resultDetails && (
                <Button
          onPress={() => setDetailStatus(true)}
          title="Resim Detayları"
        ></Button>
            )
        }
      </View>
    </View>
  );
};

export default Exam;

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
    textAlign: "center",
  },
  ListTitle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 40,
    textDecorationLine: "underline",
    color: "red",
  },
});
