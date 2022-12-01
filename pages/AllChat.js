import * as React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import Chat from '../components/Chat';
import Header from '../components/Header';

const width = Dimensions.get('window').width;

const data = [
    {
        "name": "Ahmed Naeem",
        "message": "Hello!",
        "image": require("../images/kratos.jpg"),
        "time": "1:21 PM"
    },
    {
        "name": "Maaz",
        "message": "What's up?",
        "image": require("../images/atreus.webp"),
        "time": "10:02 AM"
    },
    {
        "name": "Fouzan Asif",
        "message": "Kal lab?",
        "image": require("../images/durlin.jpg"),
        "time": "1:17 AM"
    },
    {
        "name": "Ahmed Ashraf",
        "message": "Ok",
        "image": require("../images/tyr.jpg"),
        "time": "4:21 PM"
    },
    {
        "name": "Bilal",
        "message": "Sir?",
        "image": require("../images/thor.jpg"),
        "time": "1:07 PM"
    },
    {
        "name": "Freya",
        "message": "Hello!",
        "image": require("../images/freya.webp"),
        "time": "1:21 PM"
    },
    {
        "name": "Huzaifa",
        "message": "Hello!",
        "image": require("../images/kratos.jpg"),
        "time": "1:21 PM"
    },
    {
        "name": "Haris",
        "message": "Helo!",
        "image": require("../images/thor.jpg"),
        "time": "1:21 PM"
    },
    {
        "name": "Freya",
        "message": "Hello!",
        "image": require("../images/freya.webp"),
        "time": "1:21 PM"
    },
    {
        "name": "Huzaifa",
        "message": "Hello!",
        "image": require("../images/kratos.jpg"),
        "time": "1:21 PM"
    },
    {
        "name": "Haris",
        "message": "Helo!",
        "image": require("../images/thor.jpg"),
        "time": "1:21 PM"
    },
]


export default function AllChat(){
    
   
    return(
        <ScrollView>
            <View style={styles.container}>
                <Header />
                {data.map((user, index)=>{
                    return(
                        <Chat user={user} />
                    ); 
                })}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      
    },
  });
  