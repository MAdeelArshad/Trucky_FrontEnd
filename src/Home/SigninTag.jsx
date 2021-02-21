import { Button } from "react-bootstrap";
import { Switch, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import React, { Component } from "react";
class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      status: this.getCookie("token") === "" ? false : true
    };
  }
  componentWillMount() {
    this.setState({
      status: this.getCookie("token") === "" ? false : true
    });
  }

  getCookie = cname => {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };
  render() {
    return (
      <Switch>
        <div style={{ marginLeft: "3vw", marginBottom: "5vh" }}>
          <hr />
          <Container>
            <Row>
              <Col xs sm="8" style={{ marginTop: "2vh" }}>
                <h3 style={{ fontFamily: "'Comfortaa', cursive" }}>
                  {this.state.status
                    ? "Manage your Account"
                    : "Please SignIn To continue..."}
                </h3>
              </Col>
              <Col xs sm="3">
                <Link to="/Signin">
                  <Button
                    variant="outline-success "
                    style={{ fontFamily: "'Comfortaa', cursive" }}
                    className="text-dark"
                  >
                    {this.state.status ? "Manage" : "SignIn/Register"}
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
          <hr />
        </div>
      </Switch>
    );
  }
}

export default SignIn;
