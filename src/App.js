import "./App.css";
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  
} from "react-router-dom";
import Game from "../src/Component/Game";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "../src/Component/Home";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={Game} />
            <Route path="/Game" component={Game} />
            <Route path="/components/Home" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
