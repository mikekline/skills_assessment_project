import React, { Component } from 'react';
import '../css/DiagnosticTool.css';
import data from '../data/data.json';
import Button from 'react-bootstrap/Button';
import Circlechart from './Circlechart.jsx';
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
    this.veiwArea = this.veiwArea.bind(this);
    this.state={
      data,
      active: '',
      title:'QUALITY SCORE TREND',
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


  veiwArea(title) {
    this.setState({
      title:title.toUpperCase() + ' TREND'
    });
  }


    

    render() {
        //renders data for each donut chart card
        const dataContent = this.state.data.gaugeData.map((singleGauge, i) =>
          <div 
            onClick={() => {this.veiwArea(singleGauge.name);}} 
            key={i} 
            className="cardInfo"
          >
            <p>{singleGauge.name}</p> 

            <span>
              <p>{singleGauge.score}%</p>
              <p>N/A</p>
            </span>

            <p>Sample: {singleGauge.sample}</p>
            
            <Circlechart keyCode={i} score={singleGauge.score} />    
          </div>
        );   
      
        //renders each donut chart card to specific place on the grid
        const cards = this.state.cardClasses.map((cardId, i) =>
          <div  key={i} className={cardId}>
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
                      {this.state.title}
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
                      Area Chart
                    </div>
                </div>
            </div>
        )
    }
}