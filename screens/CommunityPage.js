import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView, ImageBackground, KeyboardAvoidingView, Keyboard } from 'react-native';
import Header from '../components/Header';
import Post from '../components/Post';

let posts = [
    {
        "author": "Ahmed Naeem",
        "image": require("../images/atreus.webp"),
        "author_image": require("../images/atreus.webp"),
        "likes": 10,
        "comments": 2,
        "shares": 1,
        "caption": "Hey, I am feeling great today!"
    },
    {
        "author": "Bilal Khan",
        "image": require("../images/thor.jpg"),
        "author_image": require("../images/angrboda.webp"),
        "likes": 5,
        "comments": 0,
        "shares": 0,
        "caption": "I am the god of thunder!"
    }
]

export default function Community({navigation}){
    return(
        <View>
            <Header status={"community"} navigation={navigation} />
            <ImageBackground source={require('../images/background.jpeg')} >
            <ScrollView>
                {
                    posts.map((post, index)=>{
                        return(
                        <Post key={index} post={post}/>
                        );
                    })
                }
            </ScrollView>
            </ImageBackground>
        </View>
    );
}