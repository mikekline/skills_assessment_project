import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './css/App.css';
import './css/DiagnosticTool.css';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

import DiagnosticTool from "./DiagnosticTool";
import UnderConstruction from "./UnderConstruction";

class App extends Component {
  render() {
    return ( 
      <Router>
          <Nav className="flex-column nav">
            <ul>
              <li></li>
              <li></li>
              <li><Link to="/under_construction" className="">icon1</Link></li>
              <li><Link to="/under_construction" className="">icon2</Link></li>
              <li><Link to="/" className="">icon3</Link></li>
              <li><Link to="/under_construction" className="">icon4</Link></li>
            </ul>
          </Nav>
          <Switch>
            <Route path="/under_construction"  component={UnderConstruction} />
            <Route path="/" exact component={DiagnosticTool} />
          </Switch>
      </Router>
    );
  }
}

export default App;
