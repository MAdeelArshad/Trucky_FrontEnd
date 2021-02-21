import React, { Component } from "react";
import { Container } from "mdbreact";
import "../CSS/Shipping.css";
import Card from "./Cards";
class CardDetails extends Component {
  state = {
    Details: [
      {
        title: "Customs House Brokerage",
        text:
          'Due to the special nature of "clearing" cargo, it is important to know the variations in customs practices across the world. We can help you with the complexities of border controls and customs regulations for both export and import cargoes and at origin and destination. You already book your containers with us.',
        src: "/images/shipping/card1.jpg"
      },
      {
        title: "Value Protect",
        text:
          "While we always do our utmost to take good care of your cargo, we are glad to introduce you to our new extended liability solution. To keep the value of your cargo safe from logistic-related risks. At competitive prices and without any deductibles.",
        src: "/images/shipping/card3.jpg"
      },
      {
        title: "Trade Finance",
        text:
          "We offer simple digital trade finance solutions to help you with your working capital needs. A simplified solution that can handle both the flow of your goods and financing at a competitive cost to help you expand and develop your business.",
        src: "/images/shipping/card2.jpg"
      }
    ]
  };
  render() {
    return (
      <Container style={{ paddingLeft: "6vw" }}>
        <div className="row " style={{}}>
          {this.state.Details.map(item => (
            <Card key={item} data={item} />
          ))}
        </div>
      </Container>
    );
  }
}

export default CardDetails;
