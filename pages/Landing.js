import * as React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';

const width = Dimensions.get('window').width;
export default function Landing({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome to Whatsapp</Text>
            <Image style={styles.image} source={require('../images/image1.png')} />
            <Text style={styles.text}>Read our <Text style={styles.fancy}>Privacy Policy</Text>. Tap "Agree and continue" to accept the <Text style={styles.fancy}>Terms of Service</Text></Text>
            <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("Chats")}}><Text style={styles.buttontext}>AGREE AND CONTINUE</Text></TouchableOpacity>
            <View>
                <Text style={styles.text}>from</Text>
                <Text style={styles.footer}>Folio3</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-around",
      backgroundColor: '#101d24',
      alignItems: 'center'
    },
    image: {
        width: width*0.8,
        height: width*0.8
    },
    heading: {
        fontSize: 40,
        color: "white",
        marginTop: 50
    },
    text: {
        color: "white",
        fontSize: 17,
        paddingLeft: 20,
        paddingRight: 20,
        textAlign: "center",
        color: "gray"
    },
    fancy: {
        color: "#5598ba",
        fontSize: 17,
    },
    button: {
        width: width*0.7,
        backgroundColor: "#00af9c",
        borderRadius: 5
    },
    buttontext: {
        fontSize: 20,
        color: "#101d24",
        textAlign: "center",
        paddingTop: 15,
        paddingBottom: 15,
        fontWeight: "bold"
    },
    footer: {
        fontSize: 25, 
        color: "#C7C7C7",
        marginTop: 10,
        textAlign: "center"
    }
  });
  