import React from 'react';
import Line from './Line';

class Bar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0
        }
        this.onMouseMove = this.onMouseMove.bind(this);

    }



    onMouseMove(e) {
        this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    }

    render() {
        console.log(this.state.x);

        return (
            <div onMouseMove={this.onMouseMove} class="bar z-depth-1" id={'bar' + this.props.number}>
                <Line />
                <Line />
                <Line />
                <Line />
                <Line />
            </div>
        );
    }
}

export default Bar;