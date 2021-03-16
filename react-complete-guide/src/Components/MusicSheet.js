import React from 'react';
import Bar from './Bar';


class MusicSheet extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const bars = [];
        for (let i = 0; i < this.props.bars; i++) {
            bars.push(<Bar number={i} />);
        }

        return (<div class="musicSheet">
            {bars}
        </div>);
    }
}

export default MusicSheet;