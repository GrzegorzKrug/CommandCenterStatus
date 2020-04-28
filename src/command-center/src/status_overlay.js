import React, { Component } from 'react';
import logo from './banana.png';
import './status_overlay.css';
import { Container } from 'react-bootstrap';
import get_time from './functions/get_time';


export default class StatusOverlay extends Component {
    render() {
        return (
            <div className="overlay">
                <header className="header">
                    <aside className="title">                      
                            Welcome traveler                        
                    </aside>
                    <aside className="clock">
                        {get_time()}
                    </aside>
                </header>
                <div className="tablebody">
                    <aside className="column1">
                        <Container className="db_buttons">Test1</Container>
                        <Container className="db_stats">Test2</Container>
                        <Container className="db_sometext"><img className='App-logo' width='30%' src={require("./banana.png")}/> </Container>
                    </aside>
                    <aside className="column2">
                        <Container className="github_buttons">Test1</Container>
                        <Container className="github_readme">Test2</Container>
                    </aside>
                    <aside className="column3">
                        <Container className="github_last_repos">Test3</Container>
                        <Container className="github_grpahs">Test3</Container>
                    </aside>
                </div>
            </div>
        )
    }
}

