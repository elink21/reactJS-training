import React from 'react';
import Line from './Line';

class Bar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0
        }

    }




    render() {
        return (
            <div  class="bar z-depth-1" id={'bar' + this.props.number}>
                <Line tune="F"/>
                <Line tune="A"/>
                <Line tune="C"/>
                <Line tune="E"/>
                <Line tune="G"/>
            </div>
        );
    }
}

export default Bar;