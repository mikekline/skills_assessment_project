import React, { Component } from 'react';
import  * as d3 from "d3";
import '../css/Chart.css';





export default class Circlechart extends Component {
    constructor (props) {
        super(props);        
        this.state={
           data: props
        }
      }
      
    render() {  
        let remainder = 100 - this.state.data.score;
        const data =  [this.state.data.score, remainder];
        
        let pie = d3.pie()(data);
        
    
     
        const Slice = props => {
            let {pie} = props;
    
            let arc = d3.arc()
                .innerRadius(50)
                .outerRadius(60);

                let interpolate = d3.interpolate('#0000FF', '#808080');
    
            return pie.map((slice, index) => {
                let sliceColor =interpolate(index / (pie.length -1))

                return <path key={index} d={arc(slice)} fill={sliceColor} />;
            });     
        };


        return (
            <svg  className="svg">
                <g>
                    <Slice pie={pie} />
                </g>
            </svg>
        )
    }
}