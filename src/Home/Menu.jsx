import React, { Component } from "react";
import "../CSS/App.css";
import { Button } from "react-bootstrap";
import { Switch, Link } from "react-router-dom";
import Typed from "typed.js";

class Menu extends Component {
  componentDidMount() {
    // If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const { strings } = this.props;
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings: strings,
      typeSpeed: 30,
      backSpeed: 50,
      cursorChar: ""
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    return (
      <Switch>
        <div className="menu">
          <div className="heading">
            <div className="type-wrap">
              <span
                style={{
                  whiteSpace: "unset"
                }}
                ref={el => {
                  this.el = el;
                }}
              />
            </div>
          </div>

          <h5 className="heading5">
            We have developed an unrivalled shipping expertise to offer you
            arange of services to connect you to key markets across the globe.
          </h5>
          <div className="menuButton">
            <Link to="/SignIn">
              <Button variant="outline-success ">Become a customer</Button>
            </Link>
            <Link to="/SignIn">
              <Button variant="outline-success ">ACCESS YOUR ACCOUNT</Button>
            </Link>
            <Link to="/SignIn">
              <Button variant="outline-success ">START A CARRERS</Button>
            </Link>
          </div>
        </div>
      </Switch>
    );
  }
}

export default Menu;
