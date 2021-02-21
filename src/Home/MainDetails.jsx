import React, { Component } from "react";
import Detail from "./Detail";

class MainDetails extends Component {
  state = {
    Details: [
      {
        heading: "Shipping and Cargo Services",
        para:
          "As the world’s largest container shipping company, we move 12 million containers every year and deliver to every corner of the globe. Regardless of your industry, your commodity, or your key markets, we have solutions that offer both small and large businesses the opportunity to grow. We serve our customers with frequent departures on all major trade lanes and inland services for a true end-to-end experience.",
        btntxt: "SHIPPING AND CARGO SERVICES",
        imgurl: "/images/DET1.jpg",
        url: "Shipping"
      },
      {
        heading: "Supply Chain Services",
        para:
          "We focus on solving your supply chain needs from end to end, taking the complexity out of container shipping for you. We are at the forefront of developing innovative supply chain solutions, fusing our global network and depth of expertise with pioneering digital innovations to enable our customers to stay ahead. The vision is to connect and simplify supply chains across the globe.",
        btntxt: "SUPPLY CHAIN SERVICES",
        imgurl: "/images/DET2.jpg",
        url: "/"
      },
      {
        heading: "Freight Forwarding",
        para:
          "From specialised ocean shipments to airfreight and inland transportation, our advanced solutions, extensive hub network and strong co-operation with our logistics partners ensure complete control, fast transit times and seamless connections to final destination.",
        btntxt: "FREIGHT FORWARDING",
        imgurl: "/images/DET3.jpg",
        url: "/"
      },
      {
        heading: "Digital Solutions",
        para:
          "We all buy goods, track deliveries and pay online. Shipping with Maersk is no different. Our tailored online services take the complexity out of shipping by letting you instantly book, manage and track shipments, submit Verified Gross Mass information and much more.",
        btntxt: "DIGITAL SOLUTIONS",
        imgurl: "/images/DET4.jpg",
        url: "/"
      }
    ],
    Style: { margin: "1vh" }
  };
  render() {
    return (
      <div>
        {this.state.Details.map(item => (
          <Detail key={item} data={item} style={this.state.Style} />
        ))}
      </div>
    );
  }
}

export default MainDetails;
