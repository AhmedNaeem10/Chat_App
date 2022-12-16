import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView, Alert, FlatList, SafeAreaView, Modal, TouchableWithoutFeedback } from 'react-native';
import Chat from '../components/Chat';
import Header from '../components/Header';
import DataContext from '../context/DataContext';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;



export default function AllChat({ navigation, route }) {
    const [query, setQuery] = useState("");
    const data = useContext(DataContext)
    // const [data, setData] = useState(
    //     [
    //         {
    //             "id": 0,
    //             "name": "Ahmed",
    //             "messages": [{ "message": "Hello!", "time": "1:21 PM", }],
    //             "image": require("../images/kratos.jpg"),
    //             "status": "\"Fate only binds you if you let it\"",
    //             "msg_status": "delivered"
    //         }, {
    //             "id": 1,
    //             "name": "Ahmed Naeem",
    //             "messages": [{ "message": "Hello!", "time": "1:21 PM", }],
    //             "image": require("../images/kratos.jpg"),
    //             "status": "\"Fate only binds you if you let it\"",
    //             "msg_status": "delivered"
    //         },
    //         {
    //             "id": 2,
    //             "name": "Maaz",
    //             "messages": [{ "message": "What's up?", "time": "2:21 AM" }],
    //             "image": require("../images/atreus.webp"),

    //             "status": "Do what is necessary!",
    //             "msg_status": "sent"
    //         },
    //         {
    //             "id": 3,
    //             "name": "Fouzan Asif",
    //             "messages": [{ "message": "kal lab?", "time": "1:21 AM" }],
    //             "image": require("../images/durlin.jpg"),
    //             "status": "Available",
    //             "msg_status": "seen"
    //         },
    //         {
    //             "id": 4,
    //             "name": "Ahmed Ashraf",
    //             "messages": [{ "message": "Ok", "time": "4:21 PM" }],
    //             "image": require("../images/tyr.jpg"),
    //             "status": "Death can have me, when it earns me",
    //             "msg_status": "seen"
    //         },
    //         {
    //             "id": 5,
    //             "name": "Bilal",
    //             "messages": [{ "message": "Sir?", "time": "6:21 AM" }],
    //             "image": require("../images/thor.jpg"),
    //             "status": "Busy",
    //             "msg_status": "delivered"
    //         },
    //         {
    //             "id": 6,
    //             "name": "Freya",
    //             "messages": [{ "message": "Hola amigo!", "time": "3:04 AM" }],
    //             "image": require("../images/freya.webp"),
    //             "status": "Only dm",
    //             "msg_status": "delivered"
    //         },
    //         {
    //             "id": 7,
    //             "name": "Huzaifa",
    //             "messages": [{ "message": "Congrats", "time": "12:21 AM" }],
    //             "image": require("../images/kratos.jpg"),
    //             "status": "Leave me alone",
    //             "msg_status": "sent"
    //         },
    //         {
    //             "id": 8,
    //             "name": "Haris",
    //             "messages": [{ "message": "enjoy", "time": "12:21 PM" }],
    //             "image": require("../images/thor.jpg"),
    //             "status": "away",
    //             "msg_status": "delivered"
    //         },
    //         {
    //             "id": 9,
    //             "name": "Freya",
    //             "messages": ["Hello!"],
    //             "image": require("../images/freya.webp"),
    //             "time": "1:21 PM",
    //             "status": "dead",
    //             "msg_status": "delivered"
    //         },
    //         {
    //             "id": 10,
    //             "name": "Huzaifa",
    //             "messages": [{ "message": "lol", "time": "02:41 AM" }],
    //             "image": require("../images/kratos.jpg"),
    //             "time": "1:21 PM",
    //             "status": "Dm only in an actual urgency",
    //             "msg_status": "seen"
    //         },
    //         {
    //             "id": 11,
    //             "name": "Haris",
    //             "messages": [{ "message": "No", "time": "8:21 AM" }],
    //             "image": require("../images/thor.jpg"),
    //             "time": "1:21 PM",
    //             "status": "calls only",
    //             "msg_status": "delivered"
    //         },
    //     ]
    // );
    const [copy, setCopy] = useState(data);
    const [modalVisible, setModalVisible] = useState(false);
    const [toDelete, setToDelete] = useState(0);

    useEffect(() => {
        if (route.params) {
            setData(route.params.msgs)
        }
    }, [])

    const handleQuery = (query) => {
        setQuery(query)
        if (query.length) {
            let hold = copy.filter((user) => {
                return user.name.startsWith(query, 0)
            });
            setData(hold)
        } else {
            setData(copy)
        }
    }

    // const addChat = () => {
    //     navigation.navigate("NewChat", {
    //         data: data
    //     })
    // }

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate("OpenChat", {
                    user: item,
                    data: data
                })
            }}

            onLongPress={() => {
                setModalVisible(true);
                setToDelete(item);
            }}

        // onLongPress={()=>{
        //     Alert.alert(
        //         "Delete Chat",
        //         "This chat will be deleted permanently!",
        //         [
        //             {
        //             text: "OK",
        //             onPress: () => {
        //                 let index = data.indexOf(item);
        //                 data.splice(index, 1)
        //                 setData(data)
        //             },
        //             style: "cancel"
        //             },
        //             { text: "CANCEL" }
        //         ]
        //         );
        // }}
        >
            <Chat user={item} />
        </TouchableOpacity>
    );

    return (
        <TouchableWithoutFeedback style={{ backgroundColor: modalVisible ? "gray" : "white" }} onPress={() => {
            setModalVisible(false)
        }}>
            <>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                    style={{
                        shadowColor: "gray",
                        shadowOffset: {
                            width: 10,
                            height: 10
                        },
                        shadowOpacity: 0.5,
                        shadowRadius: 10,
                        elevation: 10
                    }}
                >
                    <View style={{ height: 120, width: width - 100, alignSelf: "center", backgroundColor: "white", padding: 20, borderRadius: 10, marginTop: height / 2 - 60, borderWidth: 0.4 }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Delete this chat?</Text>
                        <Text style={{ marginTop: 10, fontSize: 17 }}>This chat will be permanently deleted</Text>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", marginTop: 10, alignSelf: "flex-end", padding: 10 }}>
                            <TouchableOpacity 
                            onPress={() => {
                                let index = data.indexOf(toDelete);
                                data.splice(index, 1)
                                setData(data)
                                setModalVisible(false)
                            }}>
                                <Text style={{ fontSize: 18, color: "#075e54", fontWeight: "bold" }}>Ok</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => {
                                setModalVisible(false)
                            }}><Text style={{ fontSize: 18, color: "red", fontWeight: "bold" }}>Cancel</Text></TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <Header handleQuery={handleQuery} navigation={navigation} status={"chats"} />

                {data.length ?
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        initialNumToRender={3}
                    />
                    : <Text style={{ textAlign: "center", marginTop: 30, fontStyle: "italic", color: "gray" }}>No chats found!</Text>}
                {/* </SafeAreaView> */}
                {/* <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={addChat}
                    style={styles.touchableOpacityStyle}>
                    <Image
                        source={require("../images/add.png")}
                        style={styles.floatingButtonStyle}
                    />
                </TouchableOpacity> */}
            </>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    touchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 60,
        shadowOffset: { width: -4, height: 10 },
        shadowColor: '#171717',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 30
    },
    floatingButtonStyle: {
        resizeMode: 'contain',
        width: 60,
        height: 60,
    },
});
