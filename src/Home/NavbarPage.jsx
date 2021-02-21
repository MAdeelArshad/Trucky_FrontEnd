import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem
} from "mdbreact";
import "../CSS/App.css";
import { Switch } from "react-router-dom";
import Link from "react-router-dom/Link";

class NavbarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      status: this.getCookie("token") === "" ? false : true
    };
    this.onClick = this.onClick.bind(this);
  }
  componentWillMount() {
    this.setState({ status: this.getCookie("token") === "" ? false : true });
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
  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  deleteCookie = cname => {
    var d = new Date(); //Create an date object
    d.setTime(d.getTime() - 1000 * 60 * 60 * 24); //Set the time to the past. 1000 milliseonds = 1 second
    var expires = "expires=" + d.toGMTString(); //Compose the expirartion date
    document.cookie = cname + "=" + " ; " + expires; //Set the cookie with name and the expiration date
  };
  signOut = () => {
    this.deleteCookie("token");
    this.deleteCookie("email");
    this.deleteCookie("firstName");
    this.deleteCookie("lastName");
    window.location.reload();
  };
  render() {
    return (
      <Switch>
        <div>
          <header>
            <MDBNavbar
              style={{ backgroundColor: "rgb(54, 177, 197)" }}
              dark
              expand="md"
              className="text-success "
            >
              <MDBNavbarBrand href="/">
                <strong className="logo"> Trucky</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.onClick} />
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink className="navItem" to="/">
                      Home
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className="navItem" to="/Shipping">
                      Shipping
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    {this.state.status ? (
                      <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                          <div className="d-md-inline">
                            {this.getCookie("firstName")}
                          </div>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu right>
                          <Link to="/SignIn">
                            <MDBDropdownItem>
                              Manage account <i className="fas fa-user-alt" />
                            </MDBDropdownItem>
                          </Link>
                          <MDBDropdownItem onClick={this.signOut}>
                            Sign Out
                          </MDBDropdownItem>
                        </MDBDropdownMenu>
                      </MDBDropdown>
                    ) : (
                      <MDBNavLink className="navItem" to="/SignIn">
                        SignIn <i className="fas fa-user-alt" />
                      </MDBNavLink>
                    )}
                  </MDBNavItem>
                  <MDBNavItem style={{ marginTop: "4%", marginLeft: "1vw" }}>
                    <a
                      target="_blank"
                      className="fb-ic ml-0"
                      href="https://www.facebook.com/fear.less.12345678"
                    >
                      <i className="fab fa-facebook-f white-text mr-lg-4"> </i>
                    </a>
                  </MDBNavItem>

                  <MDBNavItem style={{ marginTop: "4%" }}>
                    <a
                      target="_blank"
                      className="ins-ic"
                      href="https://www.instagram.com/adii_1997/"
                    >
                      <i className="fab fa-instagram white-text mr-lg-4"> </i>
                    </a>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
        </div>
      </Switch>
    );
  }
}

export default NavbarPage;
