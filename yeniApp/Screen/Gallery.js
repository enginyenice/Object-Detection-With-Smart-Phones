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
  TouchableOpacity,
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
//http://yazlab.enginyenice.com/detectedImages/5fe8b5269a8d2.jpg

const Separator = () => <View style={styles.separator} />;

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

    setSelectedDetail(data['details']);

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
        <Text style={styles.ListTitle}>TESPİT EDİLENLER</Text>
        {listItems}
        <Text style={styles.ListTitle}>
          {selectedDetail.length} nesne tespit edildi.
        </Text>
      </View>
    );
  }

  function ShowDetectedImage(props) {
    let ShowSelectedImage = [
      {
        url: selectedDetectedPath,
      },
      {
        url: selectedDefaultPath,
      },
    ];
    return (
      <Modal animationType="fade" transparent={true} visible={true}>
        <ImageViewer
          backgroundColor="#fff"
          saveToLocalByLongPress={false}
          imageUrls={ShowSelectedImage}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.selectedImageButtonSuccess}
            onPress={closeModal}>
            <Text style={styles.selectedImageText}>Galeriye Dön</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.selectedImageButtonInfo}
            onPress={() => setShowDetail(true)}>
            <Text style={styles.selectedImageText}>Resim Detayları</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }

  fetchGallery();

  return (
    <>
      <Separator />
      <Button
        color="#009e49"
        title="Anasayfa"
        onPress={() => {
          props.data.changeScreen('home');
        }}></Button>
      <Separator />
      <ScrollView>
        {galleryList && <CreateGallery />}

        {galleryModalStatus == true && <ShowDetectedImage />}

        {showDetail == true && (
          <Modal animationType="slide" transparent={false} visible={true}>
            <TitleList />
            <View style={styles.buttonContainer}>


              
        <TouchableOpacity
            style={styles.selectedImageDetailButtonInfo}
            onPress={() => setShowDetail(false)}>
            <Text style={styles.selectedImageDetailImageText}>Geri Dön</Text>
          </TouchableOpacity>



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
  separator: {
    marginVertical: 12,
    borderBottomColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 50,
    backgroundColor: '#6c757d',
    alignItems: 'baseline',
  },
  selectedImageButtonInfo: {
    
    width: '50%',
    height: 50,
    backgroundColor: '#0d6efd',
    alignItems: 'center',
  },
  selectedImageText: {
    marginTop: "5%",
    color: 'white',
    fontSize: 23,
  },
  selectedImageButtonSuccess: {
    width: '50%',
    height: 50,
    backgroundColor: '#009e49',
    alignItems: 'center',
  },
  selectedImageDetailButtonInfo: {
    width: '100%',
    height: 50,
    backgroundColor: '#009e49',
    alignItems: 'center',
  },
  selectedImageDetailImageText: {
    marginTop: "2%",
    color: 'white',
    fontSize: 23,
  },
});
