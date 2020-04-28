import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

export default class MyBox extends Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Img width="40%" src={require('./banana.png')}/>
          
          <Card.Body>
            <h3>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </h3>
          </Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    );
  }
}

