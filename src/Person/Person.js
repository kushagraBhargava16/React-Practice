//Custom element
import React from 'react';
import Radium from 'radium'
import './Person.css'

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
        <div className='Person' style={style}>
            <p onClick={props.click}>Hi, I am {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input onChange={props.changed} value={props.name} />
            {/* children is a default property which gives us access to the nested tags inside our custom tag */}
        </div>
    );
}

export default Radium(person);