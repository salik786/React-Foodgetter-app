import React, { Component } from "react";
import Navbar from "./Navbarcomponent";
import Menu from "./Menucomponent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import DISHES from "../shared/dishes";
import Footer from "./footercomponent";

import About from "./Aboutcomponent";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />

          <Switch>
            <Route
              path="/menu"
              render={(props) => <Menu {...props} dishes={this.state.dishes} />}
            />

            <Route path="/about" component={About} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default Main;
