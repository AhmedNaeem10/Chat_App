import * as React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'
// import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'

const width = Dimensions.get('window').width;

export default function Header({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.basic}>
                <Text style={{marginTop: 56, fontSize: 25, color: "white", marginLeft: 20}}>WhatsApp</Text>
                <View style={styles.basic}>
                   {/* icons */}
                </View>
            </View>
            <View style={{display: "flex", flexDirection: "row", justifyContent: "space-around", height: 50, marginTop: 30, alignItems: "center"}}>
                <View style={{height: "80%", display: "flex", justifyContent: "center", alignItems: "center",borderBottomWidth: 3, borderBottomColor: "white", width: width*0.25}}>
                    <Text style={{fontSize: 20, color: "white", fontWeight: "bold"}}>Chats</Text>
                </View>
                <View style={{height: "80%", display: "flex", justifyContent: "center", alignItems: "center", width: width*0.25}}>
                    <Text style={{fontSize: 20, color: "white"}}>Status</Text>
                </View>
                <View style={{height: "80%", display: "flex", justifyContent: "center", alignItems: "center", width: width*0.25}}>
                    <Text style={{fontSize: 20, color: "white"}}>Calls</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#075e54',
    },
    basic: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    }
  });
  