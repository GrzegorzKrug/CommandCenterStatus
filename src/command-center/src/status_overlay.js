import React, { Component } from 'react';
import { connect } from 'react-redux';
import MiniClock from './components/clock';
import { LineGraph } from './components/graphs';
import { RestartButton, LeftArrowButton, RightArrowButton, XButton, OkButton } from './components/my_buttons.js';
import { Text } from "react-native"
import './status_overlay.css';


class StatusOverlay extends Component {
    render() {
        return (
            <div className="overlay">
                <header className="header">
                    <aside className="restart-button">
                        <RestartButton onPress={this.props.onRestart} />
                    </aside>
                    <aside className="titleField">
                        <div className="titleText">
                            Hello
                        </div>
                    </aside>
                    <aside className="clock">
                        <MiniClock />
                    </aside>
                </header>
                <div className="tablebody">
                    <aside className="column1">
                        <div className="db_buttons">
                            <aside className="db_button">
                                <LeftArrowButton />
                            </aside>
                            <aside className="db_button">
                                <OkButton />
                            </aside>
                            <aside className="db_button">
                                <XButton />
                            </aside>
                            <aside className="db_button">
                                <RightArrowButton />
                            </aside>

                        </div>
                        <div className="db_stats">Test2</div>
                        <div className="db_sometext"><img className='App-logo' width='25%' src={require("./banana.png")} alt="app-logo-alt" /> </div>
                    </aside>
                    <aside className="column2">
                        <div className="github_buttons">Test1</div>
                        <div className="github_readme">Test2</div>
                    </aside>
                    <aside className="column3">
                        <div className="github_last_repos">Test3</div>
                        <div className="github_graphs">
                            <p>Graph</p>
                            <LineGraph />
                        </div>
                    </aside>
                </div>
            </div>
        )
    }
    status_print() {
        console.log("Status hi")
    }
}

const mapState = state => {
    return {

    };
};

const mapDispatch = dispatch => {
    return {
        onRestart: () => dispatch({ type: "RESTART" })
    }
}

export default connect(
    mapState,
    mapDispatch
)(StatusOverlay)
