import React, { Component } from "react";
import Logo from "./Logo";
import CardDetails from "./CardDetails";
import "../CSS/Shipping.css";
import LoginTag from "../Home/SigninTag";
class Shipping extends Component {
  constructor() {
    super();
    this.state = {
      signStatus: this.getCookie("token") === "" ? false : true
    };
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
  componentWillMount() {
    this.setState({
      status: this.getCookie("token") === "" ? false : true
    });
  }

  render() {
    return (
      <div>
        <Logo
          strings={[
            "<h1>Shipping and Cargo Services</h1>",
            "<h1>Shipping and<strong> Cargo Services</strong> </h1>"
          ]}
        />
        <CardDetails />
        <hr />
        <LoginTag status={this.state.signStatus} />
        <hr />
      </div>
    );
  }
}
export default Shipping;
