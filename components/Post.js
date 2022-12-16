import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView, ImageBackground, KeyboardAvoidingView, Keyboard } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const width = Dimensions.get('window').width;

export default function Post({post}){

    return(
        <View style={{borderRadius: 10, alignSelf: "center", backgroundColor: "white", marginTop: 20}}>
            <View style={{height: 50, borderTopLeftRadius: 10, borderTopRightRadius: 10, display: "flex", flexDirection: "row", alignItems: "center", paddingLeft: 10}}>
                <Image source={post.author_image} style={{width: 30, height: 30, borderRadius: 50}}/>
                <Text style={{fontSize: 16, paddingLeft: 10, fontWeight: "bold"}}>{post.author}</Text>
            </View>
            <Text style={{padding: 10}}>{post.caption}</Text>
            <Image source={post.image} style={{width: width - 40, height: 300}}/>
            <View style={{display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                <TouchableOpacity style={{height: 50, display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}>
                    <MaterialCommunityIcons size={25} name="heart-outline" color={"#075e54"}  />
                    <Text style={{padding: 5}}>{post.likes}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 50, display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}>
                    <MaterialCommunityIcons size={25} name="comment-outline" color={"#075e54"}  />
                    <Text style={{padding: 5}}>{post.comments}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 50, display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}>
                    <MaterialCommunityIcons size={25} name="share-outline" color={"#075e54"}  />
                    <Text style={{padding: 5}}>{post.shares}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}