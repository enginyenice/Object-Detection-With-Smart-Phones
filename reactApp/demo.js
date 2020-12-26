import React, { useState, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  View,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { render } from "react-dom";




const styles = StyleSheet.create({
  img: {
    width: 700,
    height: 700,
  },

});


let  responseData;
export default function ImagePickerExample() {
  const [image, setImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [resultDetais, setResultDetais] = useState(null);


  useEffect(() => {
    (async () => {
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
        //this.setState({path: res[0]["path"], details: res[0]["detail"]});
  //     console.log(res[0]["path"])
//       console.log(res[0]["detail"])
       setResultImage(res[0]["path"])
       setResultDetais(res[0]["detail"])

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
        {detail.title}
      </Text>
    );
    return (
      <View>{listItems}</View>
    );
  }

  




  return (
    <ScrollView style={{
      marginTop:25
      
    }}>
      <Button title="Gallery" onPress={pickImage} />
      <Button title="Camera" onPress={pickCamera} />
      {resultImage&& resultDetais && (
        <View>
        <TitleList />
        <Image  source={{ uri: resultImage }} style={{ resizeMode: "contain", width: 420, height: 750}} />
        {console.log(resultDetais)}
        
        </View>
        
      )}
      
      {image && !resultImage  && (
        <Image source={{ uri: image }} style={{ resizeMode: "contain",width:420, height: 750}} />

      )}
      
    </ScrollView>
  );
}


/*

  uploadImages = async (result) => {

    let body = new FormData();
    body.append('photo', {uri: result.uri,name: 'photo.jpg',filename :'photo.jpg',type: 'image/jpg'});
        body.append('Content-Type', 'image/jpg');
    
    fetch("http://demo.enginyenice.com/index.php",{ method: 'POST',headers:{  
         "Content-Type": "multipart/form-data",
         "otherHeader": "foo",
         } , body :body} )
      .then((res) => res.json())
      .then((res) => { console.log("response" +JSON.stringify(res)); })
      .catch((e) => console.log(e))
      .done()
  };

  */