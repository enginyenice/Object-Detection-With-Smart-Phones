import React, { Component } from 'react'
import { Text, View } from 'react-native'
const {JWT} = require('google-auth-library');
const keys = require('./key.json');
const vision = require('@google-cloud/vision');
const request = require('request');

async function main() {
    const vision = require('@google-cloud/vision');
 
    // Creates a client
    const client = new vision.ImageAnnotatorClient();
   
    // Performs label detection on the image file
    const [result] = await client.labelDetection('./resources/wakeupcat.jpg');
    const labels = result.labelAnnotations;
    console.log('Labels:');
    labels.forEach(label => console.log(label.description));
  }
main();

export default class demo extends Component {
    
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
