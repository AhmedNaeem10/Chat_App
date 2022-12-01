import * as React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';

const width = Dimensions.get('window').width;

export default function Chat(props){
    return(
        <View style={styles.container}>
            <View style={styles.basic}>
                <Image style={styles.image} source={props.user.image} />
                <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: width - 45}}>
                <View style={styles.text}>
                    <Text style={{fontWeight: "bold", fontSize: 15}}>{props.user.name}</Text>
                    <Text style={{fontSize: 13, color: "gray"}}>{props.user.message}</Text>
                </View>
                <View style={styles.text}>
                    <Text style={{fontSize: 15, color: "gray", textAlign: "center"}}>{props.user.time}</Text>
                    <Text></Text>
                </View>
                </View>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 80,
        borderBottomWidth: 0.3,
        borderBottomColor: "#DEDEDE"
    },
    basic: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10
    },
    image: {
        borderRadius: 100,
        width: 60,
        height: 60,
       
    },
    text: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        
        height: 40,
        marginLeft: 10
    }
  });
  