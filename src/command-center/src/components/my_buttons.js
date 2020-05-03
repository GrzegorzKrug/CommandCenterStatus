import React, { Component } from 'react';
import {
    Image, StyleSheet, TouchableOpacity, View
} from 'react-native';


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


export default class RestartButton extends Component {
    constructor(props) {
        super(props);
        this.restart_function = this.restart_function.bind(this);
    }

    render() {
        return (
            <FlatButton onPress={this.restart_function} />
        )
    }

    // componentWillMount() {
    //     // Load list first time
    //     this.props.onRestart()
    // }

    restart_function() {
        console.log("CLICKED");
    }
}



const mapDispathToProps = dispatch => {
    return {
        onRestart: () => dispatch({ type: "ADD_COUNTER" })
    }
}