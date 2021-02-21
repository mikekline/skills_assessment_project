import React, { Component } from 'react';
import './css/DiagnosticTool.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faSlidersH,
  faDownload,
  faPrint,
  faQuestionCircle,
  faArrowAltCircleRight,
  faGlobe
} from '@fortawesome/free-solid-svg-icons';


library.add( 
  faSlidersH,
  faDownload,
  faPrint,
  faQuestionCircle,
  faArrowAltCircleRight,
  faGlobe
);


export default class DiagnosticTool extends Component {
    render() {
        return (
            <div className="DiagnosticToolComponant">
                <header>
                  <h2>Diagnostic Tool</h2>
                  <ul>
                    <li>Logged in as General User</li>
                    <li>
                      <FontAwesomeIcon className="icon" icon={faSlidersH} />
                    </li>
                    <li>
                        <FontAwesomeIcon className="icon" icon={faDownload} />
                      </li>
                    <li>
                        <FontAwesomeIcon className="icon" icon={faPrint} />
                    </li>
                    <li>
                        <FontAwesomeIcon className="icon" icon={faQuestionCircle} />
                    </li>
                    <li>
                        <FontAwesomeIcon className="icon" icon={faArrowAltCircleRight} />
                    </li>
                  </ul>
                </header>



            </div>
        )
    }
}