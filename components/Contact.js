import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
const width = Dimensions.get('window').width;

export default function UserOverview(props) {
    return(
        <TouchableOpacity style={styles.container2} onPress={()=>{props.navigation.navigate("OpenChat", {
            user: props.user,
            data: props.data
        })}}>
            <View style={styles.basic2}>
                <Image style={styles.image} source={props.user.image} />
                <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: width - 45}}>
                    <View style={styles.text}>
                        <Text style={{fontWeight: "bold", fontSize: 15}}>{props.user.name}</Text>
                        <Text style={{fontSize: 13, color: "gray"}}>{props.user.status}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#075e54',
        height: 100
    },
    basic: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
    },
    container2: {
        backgroundColor: 'white',
        height: 60
    },
    basic2: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 20
    },
    image: {
        borderRadius: 100,
        width: 40,
        height: 40,
       
    },
    text: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        
        height: 40,
        marginLeft: 10
    }
  });
  