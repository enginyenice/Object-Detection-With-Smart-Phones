import React, {useState} from 'react';
import {
  StyleSheet,
  Modal,
  Button,
  Text,
  TouchableHighlight,
  View,
  ScrollView,
  Image,
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
//http://yazlab.enginyenice.com/detectedImages/5fe8b5269a8d2.jpg

const home = (props) => {
  const [galleryList, setGalleryList] = useState(null);
  const [selectedDefaultPath, setSelectedDefaultPath] = useState(null);
  const [selectedDetectedPath, setSelectedDetectedPath] = useState(null);
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [galleryModalStatus, setGalleryModalStatus] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  const FetchUrl =
    'https://php-react-database-default-rtdb.firebaseio.com/Images.json';
  function fetchGallery() {
    if (galleryList == null) {
      fetch(FetchUrl)
        .then((res) => res.json())
        .then((res) => {
          //console.log(res);
          setGalleryList(res);
        })
        .catch((e) => console.log(e))
        .done();
    }
  }

  function closeModal() {
    
    setGalleryModalStatus(false);
  }
  function openModel(data) {
    setSelectedDefaultPath(data['normal_path']);
    setSelectedDetectedPath(data['detected_path']);
    /*
    setSelectedDefaultPath(data['normal_base64']);
    setSelectedDetectedPath(data['detected_base64']);
    */
   
    setSelectedDetail(data['details'])

      setGalleryModalStatus(true);
  }

  function CreateGallery() {
    const items = [];
    for (let index in galleryList) {
     
        items.push(
          <TouchableHighlight
            key={index}
            onPress={() => openModel(galleryList[index])}>
            <Image
              key={index}
              style={styles.galleryImage}
              source={{
                //uri: galleryList[index]['detected_base64'],
                uri: galleryList[index]['detected_path'],
              }}
            />
          </TouchableHighlight>,
        );
      
    }
    return <View style={styles.scroll}>{items}</View>;
  }

  function TitleList() {
    const listItems = selectedDetail.map((detail, key) => (
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
        <Text style={styles.ListTitle}>OBJECT LIST</Text>
        {listItems}
        <Text style={styles.ListTitle}>
          {selectedDetail.length} objects detected.
        </Text>
      </View>
    );
  }

  
  function ShowDetectedImage(props){
    let ShowSelectedImage = [
      {
        url: selectedDetectedPath,
      },
      {
        url: selectedDefaultPath,
      },
    ]
    return (
      <Modal animationType="fade" transparent={true} visible={true}>
            <ImageViewer
              backgroundColor="#fff"
              saveToLocalByLongPress={false}
              imageUrls={ShowSelectedImage}
            />
            <View style={styles.buttonContainer}>
              <Button title=" Galeriye Dön " onPress={closeModal} />
              <Button
                title=" Resim Detayları "
                onPress={() => setShowDetail(true)}
              />
            </View>
          </Modal>
    )
  }

  fetchGallery();

  return (
    <>
      <Button
        title="Anasayfa"
        onPress={() => {
          props.data.changeScreen('home');
        }}></Button>

      <ScrollView>
        {galleryList && <CreateGallery />}

        {galleryModalStatus == true &&  (
          <ShowDetectedImage />
        )}

        {showDetail == true && (
          <Modal animationType="fade" transparent={false} visible={true}>
            <TitleList />
            <View style={styles.buttonContainer}>
              <Button
                title=" Resime geri dön "
                onPress={() => setShowDetail(false)}
              />
            </View>
          </Modal>
        )}
      </ScrollView>
    </>
  );
};

export default home;
const styles = StyleSheet.create({
  scroll: {flex: 1, flexDirection: 'row', flexWrap: 'wrap', flexGrow: 0},
  galleryImage: {
    flexBasis: '33%',
    margin: 0.5,
    height: 100,
    width: 100,
    backgroundColor: 'powderblue',
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
});
