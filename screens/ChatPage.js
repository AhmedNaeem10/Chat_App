import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView, ImageBackground, KeyboardAvoidingView, Keyboard } from 'react-native';
import { TextInput } from 'react-native-paper';
import Message from '../components/Message';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function OpenChat(props) {
    let { user, data } = props.route.params;

    const [msgs, setMsgs] = useState(data);
    const [message, setMessage] = useState("");

    function formatTime(timeString) {
        const [hourString, minute] = timeString.split(":");
        const hour = +hourString % 24;
        return (hour % 12 || 12) + ":" + (minute.length == 1 ? "0" + minute : minute) + (hour < 12 ? " AM" : " PM");
    }

    const sendMessage = async () => {
        if(message.length){
            const hours = new Date().getHours();
            const min = new Date().getMinutes(); 
            const time = formatTime(hours + ":" + min)
            let index = 0;
            for(let x = 0; x < msgs.length; x++){
                if(msgs[x].name == user.name){
                    index = x;
                    break;
                }
            }
            msgs[index].msg_status = "delivered";
            msgs[index].messages.push({"message": message, "time": time});
            msgs.unshift(msgs[index]);
            msgs.splice(index+1, 1);
            setMessage("");
            setMsgs(msgs);
        }
    }

    useEffect(()=>{
        for(let x = 0; x < msgs.length; x++){
            if(msgs[x].name == user.name){
               msgs[x].msg_status = "seen";
               setMsgs(msgs);
               return;
            }
        }
    }, [])

    return(
        <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
            <View style={styles.container} >
                <View style={[styles.basic, {marginTop: 10, marginLeft: 10}]}>
                    <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                        <TouchableOpacity onPress={()=>{props.navigation.navigate("Chats", {
                            msgs: msgs
                        })}}>
                            <MaterialCommunityIcons name="arrow-left" size={25} color={"white"} />
                        </TouchableOpacity>
                        <Image style={{marginLeft: 10, height: 35, width: 35, borderRadius: 100}} source={user.image} />
                        <Text style={{marginLeft: 10, fontSize: 18, color: "white"}}>{user.name}</Text>
                    </View>
                    <View style={{display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", marginRight: 20, width: 60}}>
                    <TouchableOpacity>
                        <MaterialIcon name="call" size={25} color={"white"} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="dots-vertical" size={25} color={"white"} />
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
            
            <ImageBackground source={require('../images/background.jpeg')} resizeMode="cover">
                <View style={{display: "flex", justifyContent: "space-between", height: height - 60}}>
                    <ScrollView>
                        {
                            user.messages.map((msg, index)=>{
                                return(
                                    <Message message={msg.message} time={msg.time} key={index} />
                                );
                            })
                        }
                    </ScrollView>
                    <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: width*0.95, alignSelf: "center"}}>
                        <TextInput value={message} style={{height: 45, fontSize: 18, width: width - 70, alignSelf: "center", borderTopLeftRadius: 30, borderBottomLeftRadius: 30, borderTopRightRadius: 30, borderBottomRightRadius: 30, marginBottom: 10, backgroundColor: "white" }} placeholder={"Message"} onChangeText={(message)=>{setMessage(message)}} />
                        <TouchableOpacity style={{marginBottom: 10}} onPress={sendMessage}>
                                <MaterialCommunityIcons name="send-circle" size={50} color={"#075e54"} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#075e54',
        height: 60
    },
    basic: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
    },
  });
  