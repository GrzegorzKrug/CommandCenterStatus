import React, { Component } from 'react';
import {
    Image, StyleSheet, TouchableOpacity, View, Text
} from 'react-native';


const styles = StyleSheet.create({
    button_green: {
        display: "flex",
        borderWidth: 2,
        borderRadius: 20,
        height: 35,
        backgroundColor: "#009f3c",
        alignItems: "stretched",
    },
    button_arrow: {
        display: "flex",
        alignItems: "center",
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: "#EF2",
        height: 20,
        // width: 30,
        marginHorizontal: 1,
        // paddingVertical: 5,
    },

    button_with_text: {
        display: "flex",
        alignItems: "center",
        borderWidth: 2,
        borderRadius: 10,
        marginHorizontal: 1,
        backgroundColor: "#890",
        paddingHorizontal: 5,
        height: 20,
        fontSize: 15,
    },
    text_in_button: {
        flex: 1,
        fontWeight: 800,
    }
})


export class RestartButton extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} >
                <View style={styles.button_green}>
                    <Image source={require("./pics/restart-button.png")}
                        style={{
                            flex: 1,
                            width: 35,
                            height: 35,
                            marginHorizontal: 20,
                        }} />
                </View>
            </TouchableOpacity>
        )
    }
}


export class LeftArrowButton extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} >
                <View style={styles.button_arrow}>
                    <Image source={require("./pics/arrow-left.png")}
                        style={{
                            flex: 1,
                            width: 15,
                            height: 15,
                            marginHorizontal: 10,
                        }} />
                </View>
            </TouchableOpacity>
        )
    }
}

export class RightArrowButton extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} >
                <View style={styles.button_arrow}>
                    <Image source={require("./pics/arrow-right.png")}
                        style={{
                            flex: 1,
                            width: 15,
                            height: 15,
                            marginHorizontal: 10,
                        }} />
                </View>
            </TouchableOpacity>
        )
    }
}


export class XButton extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} >
                <View style={[styles.button_with_text, { backgroundColor: "#F55" }]}>
                    <Text style={styles.text_in_button}>
                        X
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export class OkButton extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} >
                <View style={[styles.button_with_text, { backgroundColor: "#0F3" }]}>
                    <Text style={styles.text_in_button}>
                        Ok
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

