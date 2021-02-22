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
  faGlobe,
  faThumbtack,
  faSquare,
  faExclamationCircle
} from '@fortawesome/free-solid-svg-icons';


library.add( 
  faSlidersH,
  faDownload,
  faPrint,
  faQuestionCircle,
  faArrowAltCircleRight,
  faGlobe,
  faThumbtack,
  faSquare,
  faExclamationCircle
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

                <div className="container">
                    <div className="title">
                      <h3>Performance Management</h3>
                    </div>

                    <div className="toolName">
                      <span><FontAwesomeIcon className="" icon={faGlobe} size="lg" /> Diagnostic Tool</span> 
                      <FontAwesomeIcon className="icon" icon={faThumbtack} />
                    </div>

                    <div className="filters">
                      Filters
                      <div className="filtersBox card">
                        <FontAwesomeIcon className="" icon={faSquare} size="sm" />  
                          <span> All CQA Results </span>
                        <FontAwesomeIcon className="" icon={faExclamationCircle} size="sm" />
                        <br/>
                        <FontAwesomeIcon className="" icon={faSquare} size="sm" /> 
                          <span> CQAs with Closed Loop </span>
                        <FontAwesomeIcon className="" icon={faExclamationCircle} size="sm" />
                      </div>

                    </div>

                    <div className="trend">
                      QUALITY SCORE TREND 
                      <span>
                        <Button className="button" as="input" type="button" value="Day" />{' '}
                        <Button className="button" as="input" type="button" value="Week" />{' '}
                        <Button className="button" as="input" type="button" value="Month" />{' '}
                        <Button className="button" as="input" type="button" value="Quarter" />{' '}
                        <Button className="button" as="input" type="button" value="Half" />{' '}
                        <Button className="button" as="input" type="button" value="Year" />{' '}
                      </span>
                    </div>

                    <div className="qualityScore card">
                      
                    </div>

                    <div className="basics card">
                      
                    </div>
                    <div className="interaction card">
                      
                    </div>
                    <div className="expertise card">
                      
                    </div>
                    <div className="process card">
                      
                    </div>
                    <div className="knowledge card">
                      
                    </div>

                    <div className="graph">
                      
                    </div>
                </div>

            </div>
        )
    }
}