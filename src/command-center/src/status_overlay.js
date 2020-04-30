import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import MiniClock from './components/clock';
import { LineGraph } from './components/graphs';


import './status_overlay.css';


export default class StatusOverlay extends Component {
    render() {
        return (
            <div className="overlay">
                <header className="header">
                    <aside className="title">
                        Welcome traveler
                    </aside>
                    <aside className="clock">
                        <MiniClock />
                    </aside>
                </header>
                <div className="tablebody">
                    <aside className="column1">
                        <div className="db_buttons">Test1</div>
                        <div className="db_stats">Test2</div>
                        <div className="db_sometext"><img className='App-logo' width='25%' src={require("./banana.png")} /> </div>
                    </aside>
                    <aside className="column2">
                        <div className="github_buttons">Test1</div>
                        <div className="github_readme">Test2</div>
                    </aside>
                    <aside className="column3">
                        <div className="github_last_repos">Test3</div>
                        <div className="github_graphs"><LineGraph /></div>
                    </aside>
                </div>
            </div>
        )
    }
}
