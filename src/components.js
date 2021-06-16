import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../src/Component/Home";
class components extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/components/Home" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default components;
