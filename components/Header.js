import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Searchbar } from 'react-native-paper';
import { useFonts } from 'expo-font';

const width = Dimensions.get('window').width;

export default function Header({ handleQuery, navigation, status }) {
    const [search, setSearch] = useState(true);

    const [loaded] = useFonts({
        'DancingScript': require('../assets/fonts/DancingScript.ttf'),
      });
    
      if (!loaded) {
        return null;
      }

    const openSearch = () => {
        setSearch(false);
    }

    return (
        <>
            <StatusBar animated={true}
                backgroundColor="#075e54"
                barStyle={"light-content"}
                showHideTransition={"slide"}
            />
            {search ?
                <View style={styles.container}>
                    <View style={[styles.basic, { marginTop: 26, marginBottom: 26 }]}>
                        <Text style={{ fontFamily: 'DancingScript', fontSize: 25, color: "white", marginLeft: 20}}>WhatsApp</Text>
                        <View style={{ marginRight: 20, marginTop: 5}}>
                            <MaterialIcon size={25} name="search" color={"white"} onPress={openSearch} />
                        </View>
                    </View>

                    {/* removed the scrollview to navigate to chats, status, calls and community due to bottomtab navigation */}
                    {/* <ScrollView horizontal={true} >
            <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", height: 50, marginTop: 30, alignItems: "center" }}>
                <TouchableOpacity onPress={()=>{navigation.navigate("Chats")}} style={{height: "100%", display: "flex", justifyContent: "center", alignItems: "center",borderBottomWidth: status == "chats" ? 3 : 0, borderBottomColor: status == "chats" ? "white": "none", width: width/3}}>
                    <Text style={{fontSize: 20, color: "white", fontWeight: status == "chats" ? "bold" : "plain"}}>Chats</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: "100%", display: "flex", justifyContent: "center", alignItems: "center", width: width/3 - 20, borderBottomWidth: status == "status" ? 3 : 0, borderBottomColor: status == "status" ? "white": "none"}}>
                    <Text style={{fontSize: 20, color: "white", fontWeight: status == "status" ? "bold" : "plain"}}>Status</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: "100%", display: "flex", justifyContent: "center", alignItems: "center", width: width/3  -20, borderBottomWidth: status == "calls" ? 3 : 0, borderBottomColor: status == "calls" ? "white": "none"}}>
                    <Text style={{fontSize: 20, color: "white", fontWeight: status == "calls" ? "bold" : "plain"}}>Calls</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate("Community")}} style={{height: "100%", display: "flex", justifyContent: "center", alignItems: "center", width: width/3 - 20, borderBottomWidth: status == "community" ? 3 : 0, borderBottomColor: status == "community" ? "white": "none"}}>
                    <Text style={{fontSize: 20, color: "white", fontWeight: status == "community" ? "bold" : "plain"}}>Community</Text>
                </TouchableOpacity>
            </View>
            </ScrollView> */}

                </View>
                : <Searchbar
                    placeholder="Search"
                    cursorColor="#075e54"
                    onChangeText={handleQuery}
                    autoFocus={true}
                    icon={() => <MaterialCommunityIcons name="arrow-left" size={25} color={"gray"} onPress={() => { setSearch(true) }} />}
                />
            }
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#075e54',
        shadowOffset: { width: -2, height: 10 },
        shadowColor: '#171717',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 30,
    },
    basic: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
    }
});
