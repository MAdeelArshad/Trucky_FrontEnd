import React, { Component } from "react";
import Typed from "typed.js";

class Logo extends Component {
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
  state = {};
  render() {
    return (
      <div className="row" style={{ margin: ".008vw", width: "100%" }}>
        <span
          className="centerLogo"
          ref={el => {
            this.el = el;
          }}
        />
        <p className="centerLogo" style={{ paddingTop: "2vh" }}>
          Regardless of your industry, your commodity, or your key markets,
          Maersk has solutions that offer both small and large businesses the
          opportunity to grow. We serve our customers with frequent departures
          on all major trade lanes and inland services for a true end-to-end
          experience.
        </p>
      </div>
    );
  }
}

export default Logo;
