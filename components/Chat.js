import * as React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const width = Dimensions.get('window').width;

export default function Chat(props){
    return(
        <View style={styles.container}>
            <View style={styles.basic}>
                <Image style={styles.image} source={props.user.image} />
                <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: width - 45}}>
                <View style={styles.text}>
                    <Text style={{fontWeight: "bold", fontSize: 15}}>{props.user.name}</Text>
                    <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        {
                            props.user.msg_status == "sent" ? 
                            <MaterialCommunityIcons size={15} name="check" color={"gray"} /> :
                            props.user.msg_status == "delivered" ?
                         <MaterialCommunityIcons size={15} name="check-all" color={"gray"} /> :
                         <MaterialCommunityIcons size={15} name="check-all" color={"#0892d0"} /> 
                        }
                        
                        <Text style={{fontSize: 13, color: "gray", marginLeft: 5}}>{props.user.messages[props.user.messages.length - 1].message}</Text>
                    </View>
                </View>
                <View style={[styles.text, {paddingLeft: 30}]}>
                    <Text style={{fontSize: 15, color: props.user.msg_status == "seen" ? "gray": "#25d366", textAlign: "center"}}>{props.user.messages[props.user.messages.length - 1].time}</Text>
                    {
                        props.user.msg_status != "seen" ? <View style={{backgroundColor: "#25d366", borderRadius: 100, width: 17, height: 17, display: "flex", justifyContent: "center", alignItems: "center", alignSelf: "center"}}><Text style={{color: "white"}}>1</Text></View> :
                        <></>
                    }
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
  