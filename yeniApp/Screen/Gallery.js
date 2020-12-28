import React from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  ScrollView,
  Image,
} from "react-native";
//http://yazlab.enginyenice.com/detectedImages/5fe8b5269a8d2.jpg
const home = (props) => {
  return (
    <>
      <Button
        title="Anasayfa"
        onPress={() => {
          props.data.changeScreen("home");
        }}
      ></Button>
     
     
    
      
      <ScrollView >

<View style={styles.scroll}> 
<Image
        style={styles.galleryImage}
        source={{
          uri: "http://yazlab.enginyenice.com/detectedImages/5fe8b5269a8d2.jpg",
        }}
      />
      <Image
        style={styles.galleryImage}
        source={{
          uri: "http://yazlab.enginyenice.com/detectedImages/5fe8b5269a8d2.jpg",
        }}
      />
      <Image
        style={styles.galleryImage}
        source={{
          uri: "http://yazlab.enginyenice.com/detectedImages/5fe8b5269a8d2.jpg",
        }}
      />
      <Image
        style={styles.galleryImage}
        source={{
          uri: "http://yazlab.enginyenice.com/detectedImages/5fe8b5269a8d2.jpg",
        }}
      />
      <Image
        style={styles.galleryImage}
        source={{
          uri: "http://yazlab.enginyenice.com/detectedImages/5fe8b5269a8d2.jpg",
        }}
      />
      <Image
        style={styles.galleryImage}
        source={{
          uri: "http://yazlab.enginyenice.com/detectedImages/5fe8b5269a8d2.jpg",
        }}
      />
      <Image
        style={styles.galleryImage}
        source={{
          uri: "http://yazlab.enginyenice.com/detectedImages/5fe8b5269a8d2.jpg",
        }}
      />
      <Image
        style={styles.galleryImage}
        source={{
          uri: "http://yazlab.enginyenice.com/detectedImages/5fe8b5269a8d2.jpg",
        }}
      />
      <Image
        style={styles.galleryImage}
        source={{
          uri: "http://yazlab.enginyenice.com/detectedImages/5fe8b5269a8d2.jpg",
        }}
      />
      <Image
        style={styles.galleryImage}
        source={{
          uri: "http://yazlab.enginyenice.com/detectedImages/5fe8b5269a8d2.jpg",
        }}
      />
      <Image
        style={styles.galleryImage}
        source={{
          uri: "http://yazlab.enginyenice.com/detectedImages/5fe8b5269a8d2.jpg",
        }}
      />
      <Image
        style={styles.galleryImage}
        source={{
          uri: "http://yazlab.enginyenice.com/detectedImages/5fe8b5269a8d2.jpg",
        }}
      />
      <Image
        style={styles.galleryImage}
        source={{
          uri: "http://yazlab.enginyenice.com/detectedImages/5fe8b5269a8d2.jpg",
        }}
      />
      <Image
        style={styles.galleryImage}
        source={{
          uri: "http://yazlab.enginyenice.com/detectedImages/5fe8b5269a8d2.jpg",
        }}
      />
      <Image
        style={styles.galleryImage}
        source={{
          uri: "http://yazlab.enginyenice.com/detectedImages/5fe8b5269a8d2.jpg",
        }}
      />
      <Image
        style={styles.galleryImage}
        source={{
          uri: "http://yazlab.enginyenice.com/detectedImages/5fe8b5269a8d2.jpg",
        }}
      />
      <Image
        style={styles.galleryImage}
        source={{
          uri: "http://yazlab.enginyenice.com/detectedImages/5fe8b5269a8d2.jpg",
        }}
      />
      <Image
        style={styles.galleryImage}
        source={{
          uri: "http://yazlab.enginyenice.com/detectedImages/5fe8b5269a8d2.jpg",
        }}
      />
      <Image
        style={styles.galleryImage}
        source={{
          uri: "http://yazlab.enginyenice.com/detectedImages/5fe8b5269a8d2.jpg",
        }}
      />
      <Image
        style={styles.galleryImage}
        source={{
          uri: "http://yazlab.enginyenice.com/detectedImages/5fe8b5269a8d2.jpg",
        }}
      />
      <Image
        style={styles.galleryImage}
        source={{
          uri: "http://yazlab.enginyenice.com/detectedImages/5fe8b5269a8d2.jpg",
        }}
      />
      <Image
        style={styles.galleryImage}
        source={{
          uri: "http://yazlab.enginyenice.com/detectedImages/5fe8b5269a8d2.jpg",
        }}
      />
      <Image
        style={styles.galleryImage}
        source={{
          uri: "http://yazlab.enginyenice.com/detectedImages/5fe8b5269a8d2.jpg",
        }}
      />
      <Image
        style={styles.galleryImage}
        source={{
          uri: "http://yazlab.enginyenice.com/detectedImages/5fe8b5269a8d2.jpg",
        }}
      />
      <Image
        style={styles.galleryImage}
        source={{
          uri: "http://yazlab.enginyenice.com/detectedImages/5fe8b5269a8d2.jpg",
        }}
      />
      <Image
        style={styles.galleryImage}
        source={{
          uri: "http://yazlab.enginyenice.com/detectedImages/5fe8b5269a8d2.jpg",
        }}
      />
      <Image
        style={styles.galleryImage}
        source={{
          uri: "http://yazlab.enginyenice.com/detectedImages/5fe8b5269a8d2.jpg",
        }}
      />
      <Image
        style={styles.galleryImage}
        source={{
          uri: "http://yazlab.enginyenice.com/detectedImages/5fe8b5269a8d2.jpg",
        }}
      />
      <Image
        style={styles.galleryImage}
        source={{
          uri: "http://yazlab.enginyenice.com/detectedImages/5fe8b5269a8d2.jpg",
        }}
      />
      <Image
        style={styles.galleryImage}
        source={{
          uri: "http://yazlab.enginyenice.com/detectedImages/5fe8b5269a8d2.jpg",
        }}
      />
      <Image
        style={styles.galleryImage}
        source={{
          uri: "http://yazlab.enginyenice.com/detectedImages/5fe8b534c5191.png",
        }}
      />
</View>


      </ScrollView>
    </>
  );
};

export default home;
const styles = StyleSheet.create({
  scroll: {flex: 1, flexDirection: 'row', flexWrap: 'wrap', flexGrow: 0},
  galleryImage: {flexBasis: '33%', margin:0.5, height: 100,width:100, backgroundColor: 'powderblue'}
});
