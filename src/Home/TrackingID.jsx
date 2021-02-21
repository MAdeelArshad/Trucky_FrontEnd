import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MDBInput } from "mdbreact";
class TrackingID extends Component {
  render() {
    return (
      <Container
        style={{ margin: "2%", marginBottom: "1vh", marginTop: "3vh" }}
      >
        <Row>
          <Col xs sm="5" style={{ marginTop: "2vh" }}>
            <h3>Enter Tracking ID...</h3>
          </Col>
          <Col xs sm="6">
            <MDBInput
              label="Tracking ID"
              outline
              size="lg"
              style={{ marginTop: "-3vh" }}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TrackingID;
