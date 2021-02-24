import React, { Component } from 'react';
import '../css/DiagnosticTool.css';
import data from "../data/data.json";
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
  constructor () {
    super();
    this.state={
      data,
      'cardClasses': [
        'qualityScore card',
        'basics card',
        'interaction card',
        'expertise card',
        'process card',
        'knowledge card'
      ]
    }
  }
    

    render() {
        const dataContent = this.state.data.gaugeData.map((dataName, i)=>
          <div key={i} className='cardInfo'>
            <p>{dataName.name}</p> 
            <p>{dataName.score}%</p>
            <p>Sample: {dataName.sample}</p>
          </div>
        );   
      
        const cards = this.state.cardClasses.map((cardId, i)=>
          <div key={i} className={cardId}>
                   {dataContent[i]}
          </div>
        );


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

                    
                    {cards}


                    <div className="chart">
              
                    </div>
                </div>
            </div>
        )
    }
}