import React from 'react'
import { StyleSheet,Button, Text, View } from 'react-native'

const home = (props) => {
    
    return (
        <View>
            <Text style={styles.welcomeApp}>Kocaeli Üniversitesi</Text>
            <Text style={styles.welcomeApp}>Yazılım Laboratuvarı 1</Text>
            <Text style={styles.welcomeApp}>Proje 3</Text>
            <Text style={styles.welcomeApp}>Engin Yenice</Text>
            <Button
            title="Resim Gönder"
            onPress={() => {props.data.changeScreen("object")}}
            ></Button>
            <Button
            title="Tespit Edilen Resimler"
            onPress={() => {props.data.changeScreen("gallery")}}
            ></Button>
        </View>
    )
}

export default home
const styles = StyleSheet.create({ 
    welcomeApp: {
        color:"red",
        fontSize: 25,
        textAlign:"center",
        
    }
 });
