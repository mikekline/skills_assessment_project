import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './css/App.css';
import DiagnosticTool from './components/DiagnosticTool.jsx';
import UnderConstruction from './components/UnderConstruction.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faThumbtack, 
  faChartBar, 
  faEnvelope, 
  faFileCode,
  faFileAlt 
} from '@fortawesome/free-solid-svg-icons';


library.add( 
  faThumbtack, 
  faChartBar, 
  faEnvelope, 
  faFileCode,
  faFileAlt 
);


class App extends Component {


  render() {
    return ( 

    
      <Router>
          <nav className="nav">
            <ul>
              <li>
                <FontAwesomeIcon className="icon" icon={faThumbtack} />
              </li>
              <li>
                <Link to='/under_construction'>
                  <FontAwesomeIcon className="icon" icon={faChartBar} />
                </Link>
                </li>
              <li>
                <Link to="/under_construction">
                  <FontAwesomeIcon className="icon" icon={faEnvelope} />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FontAwesomeIcon className="icon" icon={faFileCode} />
                </Link>
              </li>
              <li>
                <Link to="/under_construction">
                  <FontAwesomeIcon className="icon" icon={faFileAlt} />
                </Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/under_construction"  component={UnderConstruction} />
            <Route path="/" exact component={DiagnosticTool} />
          </Switch>
      </Router>
    );
  }
}

export default App;
