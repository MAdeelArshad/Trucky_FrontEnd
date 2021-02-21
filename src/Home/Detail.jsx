import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "../CSS/App.css";
import { Link, Switch } from "react-router-dom";

class Detail extends Component {
  render() {
    return (
      <Switch>
        <Row style={{ margin: "2%" }}>
          <Col sm md xl-9>
            <h1>{this.props.data.heading}</h1>
            <p>
              <bold>{this.props.data.para}</bold>
            </p>
            <Link to={this.props.data.url}>
              <Button variant="outline-success">
                {this.props.data.btntxt}
              </Button>
            </Link>
          </Col>
          <Col sm md xl-3>
            <div className="hovereffect">
              <img
                className="img-responsive image__asset "
                style={{ maxHeight: "80%" }}
                src={this.props.data.imgurl}
                alt="First slide"
              />
              <div className="overlay">
                <h2>Include </h2>

                <Link className="info" to={this.props.data.url}>
                  {this.props.data.btntxt}
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Switch>
    );
  }
}

export default Detail;
