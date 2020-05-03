import React, { Component } from 'react';
import {
    Button, Image,
    StyleSheet, TouchableOpacity, Text, View
} from 'react-native';


function FlatButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress} >
            <View style={styles.button}>
                <Image source={require("./pics/restart-button.png")}
                    style={{
                        width: 35,
                        height: 35,
                        marginHorizontal: 20,
                    }} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        backgroundColor: "#009f3c",
        alignItems: "center",
    },


})

export default class RestartButton extends Component {
    render() {
        return (
            <FlatButton onPress={this.myfunction} />
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