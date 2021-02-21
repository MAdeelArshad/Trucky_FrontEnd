import React, { Component } from "react";
import Crousel from "./Crousel";
import "../CSS/App.CSS";
import Menu from "./Menu";
import TrackingID from "./TrackingID";
import MainDetails from "./MainDetails";
import SignIn from "./SigninTag";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="row" style={{ margin: ".008vw", width: "100%" }}>
          <Menu
            strings={[
              "<h1>Connecting ^400 global trade </h1>",
              "<h1>Connecting<strong> GLOBAL TRADE</strong> </h1>"
            ]}
          />
        </div>
        <Crousel />
        <hr />
        <TrackingID />
        <hr />
        <MainDetails />
        <SignIn />
      </div>
    );
  }
}

export default Home;
