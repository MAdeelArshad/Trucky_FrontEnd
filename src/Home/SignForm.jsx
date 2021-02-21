import React, { Component } from "react";
import axios from "axios";
import "../CSS/App.css";
class SignForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        firstName:
          this.getCookie("firstName") === "" ? "" : this.getCookie("firstName"),
        lastName:
          this.getCookie("lastName") === "" ? "" : this.getCookie("lastName"),
        email: this.getCookie("email") === "" ? "" : this.getCookie("email"),
        confirmEmail: "",
        password: ""
      },
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        confirmEmail: "",
        password: ""
      },
      signup: {
        show: this.getCookie("token") === "" ? false : true
      },
      status: this.getCookie("token") === "" ? false : true
    };
  }

  componentWillMount() {
    this.setState({
      status: this.getCookie("token") === "" ? false : true
    });
  }

  setCookie = (cname, cvalue, hours) => {
    var d = new Date();
    d.setTime(d.getTime() + hours * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  };
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
  deleteCookie = cname => {
    var d = new Date(); //Create an date object
    d.setTime(d.getTime() - 1000 * 60 * 60 * 24); //Set the time to the past. 1000 milliseonds = 1 second
    var expires = "expires=" + d.toGMTString(); //Compose the expirartion date
    document.cookie = cname + "=" + " ; " + expires; //Set the cookie with name and the expiration date
  };
  handleSubmit = e => {
    e.preventDefault();
    let data = {},
      choise = "",
      header = {};
    if (this.state.status) {
      choise = "update";
      data = {
        details: {
          email: this.state.data.email,
          firstName: this.state.data.firstName,
          lastName: this.state.data.lastName,
          password: this.state.data.password,
          confirmEmail: this.state.data.email
        },
        updateStatus: true,
        assignStatus: true
      };
      header = { "auth-token": this.getCookie("token") };
    } else {
      if (this.state.signup.show) {
        choise = "signUp";
        data = {
          details: this.state.data,
          assignStatus: this.state.signup.show
        };
      } else {
        choise = "signIn";
        data = {
          details: {
            email: this.state.data.email,
            password: this.state.data.password
          },
          assignStatus: this.state.signup.show
        };
      }
    }
    console.log(data);
    axios({
      method: "post",
      data: data,
      url: "http://127.0.0.1:5050/api/users/" + choise,
      headers: header
    })
      .then(res => {
        if (res.status === 200) {
          console.log("in reasadfaskj");
          console.log(res.data.token);
          this.setState({
            formErrors: {
              firstName: "",
              lastName: "",
              email: "",
              confirmEmail: "",
              password: ""
            }
          });
          this.setCookie("token", res.data.token, 6);
          this.setCookie("email", res.data.user.email, 6);
          this.setCookie("firstName", res.data.user.firstName, 6);
          this.setCookie("lastName", res.data.user.lastName, 6);

          this.setState({
            signup: { show: true },
            status: true
          });

          setTimeout(() => {
            this.props.history.push("/");
          }, 50);
          setTimeout(() => {
            window.location.reload();
          }, 100);
        }
      })
      .catch(err => {
        if (typeof err != "undefined" && typeof err.response != "undefined") {
          if (err.response.status === 400) {
            console.log(err.response);
            this.setState({ formErrors: err.response.data });
          } else {
            alert("Some thing goes wrong");
          }
        }
      });
  };

  handleChange = e => {
    const { name, value } = e.target;
    const element = { ...this.state.data, [name]: value };
    this.setState({ data: element });
    console.log(this.state.data);
  };

  memberRequest = () => {
    this.setState({
      signup: { show: !this.state.signup.show }
    });
    this.setState({
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        confirmEmail: "",
        password: ""
      },
      data: {
        firstName: "",
        lastName: "",
        email: "",
        confirmEmail: "",
        password: ""
      }
    });
  };
  accountDelete = e => {
    e.preventDefault();

    axios({
      method: "delete",
      data: { email: this.state.data.email },
      url: "http://127.0.0.1:5050/api/users/",
      headers: { "auth-token": this.getCookie("token") }
    })
      .then(res => {
        console.log("in res" + res);
        this.deleteCookie("token");
        this.deleteCookie("email");
        this.deleteCookie("firstName");
        this.deleteCookie("lastName");
        this.setState({
          status: false
        });
      })
      .catch(err => {
        console.log("in error" + err.response);
      });
    setTimeout(() => {
      this.props.history.push("/");
    }, 100);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  render() {
    const { formErrors, signup } = this.state;
    const { show } = signup;
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1 className="mainH1">
            {this.state.status
              ? "Manage Account"
              : show
              ? "Create Account"
              : "SignIn"}
          </h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label
                style={{
                  display: show ? "block" : "none"
                }}
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                style={{
                  display: show ? "block" : "none"
                }}
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="First Name"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
                value={this.state.data.firstName}
              />
              {formErrors.firstName.length > 0 && show && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>

            <div className="lastName">
              <label
                style={{
                  display: show ? "block" : "none"
                }}
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                style={{
                  display: show ? "block" : "none"
                }}
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="Last Name"
                type="text"
                name="lastName"
                noValidate
                onChange={this.handleChange}
                value={this.state.data.lastName}
              />
              {formErrors.lastName.length > 0 && show && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>

            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                style={{ pointerEvents: this.state.status ? "none" : "" }}
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
                value={this.state.data.email}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>

            <div className="email">
              <label
                style={{
                  display: show && !this.state.status ? "block" : "none"
                }}
                htmlFor="confirmEmail"
              >
                Confirm Email Address
              </label>
              <input
                style={{
                  display: show && !this.state.status ? "block" : "none"
                }}
                className={formErrors.confirmEmail.length > 0 ? "error" : null}
                placeholder="confirm Email"
                type="confirmEmail"
                name="confirmEmail"
                noValidate
                onChange={this.handleChange}
                value={this.state.data.confirmEmail}
              />
              {formErrors.confirmEmail.length > 0 &&
                show &&
                !this.state.status && (
                  <span className="errorMessage">
                    {formErrors.confirmEmail}
                  </span>
                )}
            </div>

            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
                value={this.state.data.password}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>

            <div className="createAccount">
              <button type="submit">
                {this.state.status
                  ? "Update"
                  : show
                  ? "Create Account"
                  : "SignIn"}
              </button>
              <small
                className="label"
                onClick={
                  this.state.status ? this.accountDelete : this.memberRequest
                }
              >
                {this.state.status
                  ? "Delete Account"
                  : show
                  ? "Already Have an Account?"
                  : "Create new Account"}
              </small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default SignForm;
