import React from "react";
import NavbarPage from "./Home/NavbarPage";
import FooterPage from "./Home/FooterPage";
import Home from "./Home/Home";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Shipping from "./Shipping/Shipping";
import SignForm from "./Home/SignForm";

class App extends React.Component {
  state = { refresh: false };
  componentWillMount() {
    this.setState({ refresh: false });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          {this.state.refresh && window.location.reload()}

          <NavbarPage />
          <Switch>
            <Route exact path="/Shipping" component={Shipping} />
            <Route exact path="/" component={Home} />
            <Route path="/SignIn" component={SignForm} />
            <Route Component={Error} />
          </Switch>
          <FooterPage />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
