import React, { Component } from 'react';
import {
    Image, StyleSheet, TouchableOpacity, View
} from 'react-native';
import { connect } from 'react-redux';


const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        backgroundColor: "#009f3c",
        alignItems: "center",
    },
})

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


class RestartButton extends Component {
    constructor(props) {
        super(props);
    }

    render(onClick) {
        return (
            <FlatButton onPress={onClick} />
        )
    }
}

export default RestartButton;
