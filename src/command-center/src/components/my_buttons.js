import React, { Component } from 'react';
import {
    Image, StyleSheet, TouchableOpacity, View, Text
} from 'react-native';


const styles = StyleSheet.create({
    button_green: {
        borderRadius: 20,
        backgroundColor: "#009f3c",
        alignItems: "center",
    },
    button_arrow: {
        borderRadius: 10,
        backgroundColor: "#EF2",
        alignItems: "center",
        height: 20,
        // marginHorizontal: 3,
        paddingVertical: 3,
    },
    button_with_text: {
        borderRadius: 5,
        backgroundColor: "#890",
        paddingHorizontal: 5,
        paddingVertical: 2,
        height: 20,
        fontSize: 15,
    },
    text_in_button: {
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
                            width: 15,
                            height: 15,
                            marginHorizontal: 20,
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
                            width: 15,
                            height: 15,
                            marginHorizontal: 20,
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
                <View style={styles.button_with_text}>
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
                <View style={styles.button_with_text}>
                    <Text style={styles.text_in_button}>
                        Ok
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

