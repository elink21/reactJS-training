import React from 'react';
import Note from './Note';

class Line extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="line">
                <Note tune={this.props.tune} noteType="Sustained" quarter="1n" />
                <Note tune={this.props.tune} noteType="Sustained" quarter="2n" />
                <Note tune={this.props.tune} noteType="Sustained" quarter="3n" />
                <Note tune={this.props.tune} noteType="Sustained" quarter="4n" />

                <Note tune={this.props.tune} noteType="Flat" quarter="1n" />
                <Note tune={this.props.tune} noteType="Flat" quarter="2n" />
                <Note tune={this.props.tune} noteType="Flat" quarter="3n" />
                <Note tune={this.props.tune} noteType="Flat" quarter="4n" />
            </div>
        );
    }
}

export default Line;