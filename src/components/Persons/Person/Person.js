//Custom element
import React from 'react';
import styles from './Person.module.css'

const person = (props) => {
    return (
        <div className={styles.Person} >
            <p onClick={props.click}>Hi, I am {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input onChange={props.changed} value={props.name} />
            {/* children is a default property which gives us access to the nested tags inside our custom tag */}
        </div>
    );
}

export default person;