import React, {useCallback, useContext, useState} from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import Chat from '../components/Chat';
import Header from '../components/Header';
import UserOverview from '../components/Contact';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import DataContext from '../context/DataContext';

const width = Dimensions.get('window').width;

export default function NewChat({route, navigation}){
    const data = useContext(DataContext);
    return(
        <View>
            <View style={styles.container}>
                <View style={[styles.basic, {marginTop: 10, marginLeft: 10}]}>
                    <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                        <TouchableOpacity onPress={()=>{navigation.navigate("Chats")}}>
                        <MaterialCommunityIcons name="arrow-left" size={25} color={"white"} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 25, color: "white", marginLeft: 20}}>Select contact</Text>
                    </View>
                </View>
            </View>
            <ScrollView style={{backgroundColor: "white"}}>
                <Text style={{marginTop: 20, marginLeft: 20, fontSize: 15, color: "gray", marginBottom: 10}}>Contacts on WhatsApp</Text>
                {data.map((user, key)=>{
                    return(
                        <UserOverview user={user} key={key} navigation={navigation} route={route} data={data} />
                    );
                })}
            </ScrollView>
        </View>
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
  