import React, { useState, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  View,
  Platform,
  StatusBar
} from "react-native";
import * as ImagePicker from "expo-image-picker";



const styles = StyleSheet.create({
  img: {
    
    flex: 1,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  scrollView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center"
    
  },
  TextList: {
    alignItems:"center",
    margin:0
},
TitleText :{
  fontSize: 20,
  fontWeight: "bold",
  textDecorationLine: "underline",
},
bottomView: {
  width: "100%",
  justifyContent: "space-evenly",
  position: 'relative',
  bottom: 0,
},
camera: {
  fontWeight: "bold",
  
}



});


export default function ImagePickerExample() {
  const [image, setImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [resultDetais, setResultDetais] = useState(null);
  const [status, setStatus] = useState(null);
  
  

  useEffect(() => {
    (async () => {
      setStatus("none")
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
  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "Images",
      allowsEditing: false,
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      uploadImages(result)
      setStatus("selected")
    }
  };
  pickCamera = async () => {
    //ImagePicker.launchCameraAsync(options)

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: "Images",
      allowsEditing: false,
      quality: 1,
    });

    if (!result.cancelled) {
      {
        
        setImage(result.uri);
        uploadImages(result)
        setStatus("selected")
      }
    }
  };

  
  uploadImages = async (result) => {
    let path;
    let details;
    let body = new FormData();
    body.append('photo', {uri: result.uri,name: 'photo.jpg',filename :'photo.jpg',type: 'image/jpg'});
        body.append('Content-Type', 'image/jpg');
    
    fetch("http://demo.enginyenice.com/index.php",{ method: 'POST',headers:{  
         "Content-Type": "multipart/form-data",
         "otherHeader": "foo",
         } , body :body} )
      .then((res) => res.json())
      .then((res) => { 
       setResultImage(res[0]["path"])
       setResultDetais(res[0]["detail"])
       setStatus("result")

      })
      .catch((e) => console.log(e))
      .done()
      
  };


  function TitleList() {
    const listItems = resultDetais.map((detail,key) =>
      <Text
      
      style={{
        color: "rgb("+detail.red+","+detail.green+","+detail.blue+")",
        fontSize: 20
      }}
      key={key}>
       {key +1 } - {detail.title}
      </Text>
    );
    return (
      <View style={styles.TextList}>
        <Text style={styles.TitleText}>Images List</Text>
        {listItems}
        </View>
    );
  }

  




  return (
    
    <View style={styles.scrollView}>
     
      {resultImage&& resultDetais && status == "result" && (
        <View style={{flex: 1}}>
        <TitleList />
        <Image  source={{ uri: resultImage }} style={styles.img} />
        {console.log(resultDetais)}
        
        </View>
        
      )}
      
      {image && status == "selected" && (
      <View style={{flex: 1}}>
        <Image source={{ uri: image }} style={styles.img} />
      </View>
      )}
      <View style={styles.bottomView}>
        <Button
        color="#28a745"
        styles={styles.gallery} title="GALERİDEN SEÇ" onPress={pickImage} />
        <Button 
        color="#17a2b8"
        styles={styles.camera} title="KAMERA İLE ÇEK" onPress={pickCamera} />
      </View>
     
    </View>
  );
}

