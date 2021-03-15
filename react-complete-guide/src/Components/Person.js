import React from 'react';


const person = (props) =>{
    return <h1>Im {props.data['name']} Array is: {props.data['notes']}</h1>;
}

export default person;