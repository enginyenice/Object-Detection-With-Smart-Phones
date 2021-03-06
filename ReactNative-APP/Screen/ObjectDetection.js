import React, {useState, useEffect, Component} from 'react';
import {
  StyleSheet,
  Modal,
  StatusBar,
  ScrollView,
  Button,
  View,
  Text,
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import * as ImagePicker from 'react-native-image-picker';

const ObjectDetection = (props) => {
  const [image, setImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [resultDetails, setResultDetails] = useState(null);
  const [detailStatus, setDetailStatus] = useState(false);
  const [upload, setUpload] = useState(false);
  const [status, setStatus] = useState(false);
  const FetchUrl = 'http://34.123.97.64/index.php';
  //const FetchUrl = 'http://yazlab.enginyenice.com/index.php';

  const [showImage, setShowImage] = useState(null);
  let pickImage = async () => {
    setImage(null);
    setResultDetails(null);
    setResultDetails(null);

    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
      },
      (response) => {
        if (!response.cancelled && response['didCancel'] != true) {
          setImage(response.uri);
          uploadImages(response);
        }
      },
    );
  };
  let pickCamera = async () => {
    setImage(null);
    setResultDetails(null);
    setResultDetails(null);

    ImagePicker.launchCamera({mediaType: 'photo'}, (response) => {
      if (response.error) {
        console.log('LaunchCamera Error: ', response.error);
      }
      if (!response.cancelled && response['didCancel'] != true) {
        setImage(response.uri);
        uploadImages(response);
      }
    });
  };
  let uploadImages = async (result) => {
    setUpload(true);
    let res = result['uri'].split('.');
    let type = res[res.length - 1]; // image.  jpg

    let path;
    let details;
    let body = new FormData();
    body.append('photo', {
      uri: result.uri,
      name: 'photo.' + type,
      filename: 'photo.' + type,
      type: 'image/' + type,
    });

    body.append('Content-Type', 'image/' + type);
    fetch(FetchUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        otherHeader: 'foo',
      },
      body: body,
    })
      .then((res) => res.json())
      .then((res) => {
        for (let index in res) {
          setResultImage(res[index]['detected_path']);
          setResultDetails(res[index]['details']);
          setStatus('result');
          setShowImage([
            {url: res[index]['detected_path']},
            {url: res[index]['normal_path']},
          ]);
        }
      })
      .catch((e) => console.log(e))
      .done(() => {
        setUpload(false);
      });
  };

  function updateScreen() {
    props.data.changeScreen('home');
  }
  function TitleList() {
    const listItems = resultDetails.map((detail, key) => (
      <Text
        key={key}
        style={{
          fontSize: 25,
          color:
            'rgb(' + detail.red + ',' + detail.green + ',' + detail.blue + ')',
        }}>
        {' '}
        {key + 1} - {detail.title}
      </Text>
    ));
    return (
      <View style={styles.TextListView}>
        <Text style={styles.ListTitle}>TESPİT EDİLENLER</Text>
        {listItems}
        <Text style={styles.ListTitle}>
          {resultDetails.length} nesne tespit edildi.
        </Text>
      </View>
    );
  }
  function GetImages() {
    const images = showImage;
    return (
      <ImageViewer
        backgroundColor="#fff"
        saveToLocalByLongPress={false}
        style={styles.picture}
        imageUrls={images}
      />
    );
  }
  return (
    <View style={styles.screen}>
      {showImage != null && (
        <>
          <Modal
            animationType="fade"
            transparent={false}
            visible={detailStatus}>
            <ScrollView>
              <TitleList />
              <View style={styles.buttonContainer}>
                <Button
                  title="Resime Geri Dön"
                  onPress={() => setDetailStatus(false)}
                />
              </View>
            </ScrollView>
          </Modal>
          <ImageViewer
            backgroundColor="#fff"
            saveToLocalByLongPress={false}
            style={styles.picture}
            imageUrls={showImage}
          />
        </>
      )}

      {upload == true && (
        <View>
          <Text style={styles.controlText}>
            Resim Çözümleniyor. Lütfen Bekleyiniz...
          </Text>
          <Text style={styles.controlTextTwo}>
            (Sonuçlar internet hızınıza göre değişkenlik gösterebilir.)
          </Text>
        </View>
      )}
      <View style={styles.buttonContainer}>
        <Button color="#009e49" onPress={updateScreen} title="Anasayfa" />
        <Button color="#dc3545" onPress={pickCamera} title="Kamera"></Button>
        <Button color="#0d6efd" onPress={pickImage} title="Galeri"></Button>
        {resultDetails && (
          <Button
            onPress={() => setDetailStatus(true)}
            title="Resim Detayları"></Button>
        )}
      </View>
    </View>
  );
};

export default ObjectDetection;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    marginTop: StatusBar.currentHeight,
  },
  pictureView: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  picture: {},
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 25,
    justifyContent: 'space-evenly',
  },
  TextListView: {
    textAlign: 'center',
  },
  ListTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 40,
    textDecorationLine: 'underline',
    color: 'red',
  },
  controlText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  controlTextTwo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
