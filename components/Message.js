import * as React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export default function Message(props){
    return(
        <View style={{height: 35, marginLeft: 10, marginTop: 20, backgroundColor: "white", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", borderRadius: 20, borderWidth: 0.2, width: 120, paddingLeft: 10, paddingRight: 10}}>
                <Text style={{fontSize: 17}}>{props.message}</Text>
                <Text style={{fontSize: 13, color: "gray", marginTop: 10}}>{props.time}</Text>
        </View>
    );
}