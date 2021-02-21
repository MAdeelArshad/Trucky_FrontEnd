import React from "react";
import "../CSS/App.css";
import "../CSS/Overlay.css";
import { Link, Switch } from "react-router-dom";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView
} from "mdbreact";

class Crousel extends React.Component {
  state = {};
  render() {
    return (
      <Switch>
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <div className="hovereffect">
                  <img
                    style={{ widht: "100%" }}
                    className="img-responsive "
                    src="/images/CR1.jpg"
                    alt="First slide"
                  />
                  <div className="overlay">
                    <h2>Include </h2>
                    <Link className="info" to="/">
                      Trucky
                    </Link>
                  </div>
                </div>
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive">Inclusion</h3>
                <p>Browse our Network.</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <div className="hovereffect">
                  <img
                    style={{ widht: "100%" }}
                    className="img-responsive "
                    src="/images/CR2.jpg"
                    alt="First slide"
                  />
                  <div className="overlay">
                    <h2>Include </h2>
                    <Link className="info" to="/Shipping">
                      Trucky
                    </Link>
                  </div>
                </div>
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive">Presenting </h3>
                <p>
                  {" "}
                  We have developed an unrivalled shipping expertise to offer
                  you a range of services to connect you to key markets across
                  the globe.
                </p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <div className="hovereffect">
                  <img
                    style={{ widht: "100%" }}
                    className="img-responsive "
                    src="/images/CR3.jpg"
                    alt="First slide"
                  />
                  <div className="overlay">
                    <h2>Include </h2>
                    <Link className="info" to="/">
                      Trucky
                    </Link>
                  </div>
                </div>
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive">PANTHER</h3>
                <p>Best Service Provided as Usual.</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </Switch>
    );
  }
}

export default Crousel;
