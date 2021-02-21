import Card from "react-bootstrap/Card";
import React, { Component } from "react";
class Cards extends Component {
  state = {};
  render() {
    return (
      <Card style={{ width: "18rem", marginLeft: "4%", paddingBottom: "5vh" }}>
        <Card.Img variant="top" src={this.props.data.src} />
        <Card.Body>
          <Card.Title>{this.props.data.title}</Card.Title>
          <Card.Text>{this.props.data.text}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Cards;
