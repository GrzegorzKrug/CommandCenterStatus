import React, { Component } from 'react';
import {
    Button, Image,
    StyleSheet, TouchableOpacity, Text, View
} from 'react-native';


function FlatButton({onPress }) {
    return (
        <TouchableOpacity onPress={onPress} >
            <View style={styles.button}>
                {/* <Text styles={styles.buttontext}> */}
                {/* {text} */}
                {/* </Text> */}
                <Image source={require("./pics/restart-button.png")}
                    style={{
                        width: 35,
                        height: 35,
                        marginHorizontal: 20,
                        // flex: 0 1,                  
                    }} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        // paddingVertical: 10,
        // paddingHorizontal: 10,
        backgroundColor: "#009f3c",
    },

    buttontext: {
        color: '#F00',
        fontWeight: 'bold',
        // textTransform: 'uppercase',
        fontSize: 20,
        textAlign: 'center',
    },

})

export default class RestartButton extends Component {
    render() {
        return (
            <div className="center">
                <FlatButton onPress={this.myfunction} />
            </div>
        )
    }

    // my_image() {
    //     return (
    //         <div>
    //             <FlatButton text="Reset" onPress={this.myfunction} />
    //         </div>
    //     )
    // }

    myfunction() {
        console.log("CLICKED");
    }
}