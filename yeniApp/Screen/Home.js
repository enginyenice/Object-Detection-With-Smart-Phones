import React from 'react'
import { StyleSheet,Button, Text, View } from 'react-native'

const home = (props) => {
    
    return (
        <View>
            <Text>{props.data.selectScreen}</Text>
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
const styles = StyleSheet.create({  });
