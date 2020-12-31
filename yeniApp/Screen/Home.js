import React from 'react'
import { StyleSheet,Button, Text, View,Image } from 'react-native'



const Separator = () => (
    <View style={styles.separator} />
  );

const home = (props) => {
    
    return (
        <View style={styles.homeView}>
            <Image

            source= {{
                uri: "http://bhi.kocaeli.edu.tr/amblem/logorgb.png"
            }}
            style= {{
                alignSelf:"center",
                height:300,
                width:300
            }}
            /> 
            <Separator />
            <Text style={styles.welcomeApp}> Kocaeli Üniversitesi</Text>
            <Text style={styles.welcomeApp}>Yazılım Laboratuvarı 1</Text>
            <Text style={styles.welcomeApp}>Proje 3</Text>
            <Text style={styles.welcomeApp}>Engin Yenice</Text>
            <Separator />
            <Button
            title="Resim Gönder"
            color="#009e49"
            onPress={() => {props.data.changeScreen("object")}}
            ></Button>
            <Separator />
            <Button
            title="Tespit Edilen Resimler"
            color="#009e49"
            onPress={() => {props.data.changeScreen("gallery")}}
            ></Button>
        </View>
    )
}

export default home
const styles = StyleSheet.create({ 
    welcomeApp: {
        color:"black",
        fontWeight:"bold",
        fontSize: 25,
        textAlign:"center",
        
        //#009e49
    },
    homeView: {
        marginTop: "15%",
    },
    separator: {
        marginVertical: 12,
        borderBottomColor: "white",
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
 });
