import React from 'react';
import styles from './Cockpit.module.css'

const cockpit = props => {

    const className = [];
    
    let buttonClass = '';
    if (props.showPersons) {
        buttonClass = styles.Red;
    }

    if (props.persons.length <= 2) {
        className.push(styles.red);
    }
    if (props.persons.length <= 1) {
        className.push(styles.bold);
    }

    return (
        <div className={styles.Cockpit}>
            <h1>Hi, I'm React App</h1>
            <p className={className.join(' ')}>Some random text</p>
            <button
                className={buttonClass}
                onClick={props.clicked}>
                Toggle Person
            </button>
        </div>
    );
}

export default cockpit;