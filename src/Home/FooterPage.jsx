import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link, Switch } from "react-router-dom";
class FooterPage extends Component {
  render() {
    return (
      <Switch>
        <MDBFooter
          color="unique-color-dark"
          className="page-footer font-small pt-0"
        >
          <div style={{ backgroundColor: "#6351ce" }}>
            <MDBContainer fluid className="text-center text-md-left">
              <MDBRow className="py-4 d-flex align-items-center">
                <MDBCol
                  md="6"
                  lg="5"
                  className="text-center text-md-left mb-4 mb-md-0"
                >
                  <h6 className="mb-0 white-text">
                    Get connected with us on social networks!
                  </h6>
                </MDBCol>
                <MDBCol md="6" lg="7" className="text-center text-md-right">
                  <a
                    target="_blank"
                    className="fb-ic ml-0"
                    href="https://www.facebook.com/fear.less.12345678"
                  >
                    <i className="fab fa-facebook-f white-text mr-lg-4"> </i>
                  </a>
                  <a
                    target="_blank"
                    className="ins-ic"
                    href="https://www.instagram.com/adii_1997/"
                  >
                    <i className="fab fa-instagram white-text mr-lg-4"> </i>
                  </a>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
          <MDBContainer className="mt-5 mb-4 text-center text-md-left">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mb-4">
                <h6 className="text-uppercase font-weight-bold">
                  <strong>Trucky</strong>
                </h6>
                <hr
                  className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: "60px" }}
                />
                <p>
                  A swift simple tool, providing information on routes, services
                  and sailing dates.
                </p>
              </MDBCol>
              <MDBCol md="4" lg="2" xl="2" className="mb-4">
                <h6 className="text-uppercase font-weight-bold">
                  <strong>SOLUTIONS</strong>
                </h6>
                <hr
                  className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: "60px" }}
                />
                <p>
                  <Link to="/Shipping">Shipping and cargo services</Link>
                </p>
                <p>
                  <Link to="/">Supply chain services</Link>
                </p>
                <p>
                  <Link to="/">Freight forwarding</Link>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mb-4">
                <h6 className="text-uppercase font-weight-bold">
                  <strong>Contact</strong>
                </h6>
                <hr
                  className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: "60px" }}
                />
                <p>
                  <i className="fa fa-home mr-3" /> Y Block, People's Coloney,
                  Gujranwala
                </p>
                <p>
                  <i className="fa fa-envelope mr-3" />{" "}
                  adeel.arshad2018@gmail.com
                </p>
                <p>
                  <i className="fa fa-phone mr-3" /> + 92 304 5884772
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <Link to="/"> Trucky.com </Link>
            </MDBContainer>
          </div>
        </MDBFooter>
      </Switch>
    );
  }
}

export default FooterPage;
