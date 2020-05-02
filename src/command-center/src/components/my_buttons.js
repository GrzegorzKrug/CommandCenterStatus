import React, { Component } from 'react';
import { Button, Image } from 'react-native';

export default class RestartButton extends Component {
    render() {
        return (
            // <button><img src={require("./pics/restart-button.png")} width='50%' alt="image" onClick={this.myfunction} /></button>
            <div>{this.my_image()}</div>
        )
    }

    my_image() {
        return (
            <div>
                <Image
                    source={require('./pics/restart-button.png')}
                    style={{ width: 120, height: 35 }}
                    resizeMode={"contain"}
                />

                <Button onPress={console.log("Pressed")} title="Press me">
                </Button>

            </div>
        )
    }

    myfunction() {
        console.log("CLICKED");
    }
}