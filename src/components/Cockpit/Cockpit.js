import React, { useEffect, useRef, useContext } from 'react';

import styles from './Cockpit.module.css'
import AuthContext from '../../context/auth-context'

const Cockpit = (props) => {

    const toggleButtonRef = useRef(null);

    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log("[Cockpit.js] useEffect");
        toggleButtonRef.current.click();
        return () => {
            // clearTimeout(timer);
            console.log("[Cockpit.js] cleanup work inside useEffect");
        };
    }, []);

    useEffect(() => {
        console.log("[Cockpit.js] 2nd useEffect");
        return () => {
            console.log("[Cockpit.js] cleanup work inside 2nd useEffect");
        };
    });

    const className = [];

    let buttonClass = '';
    if (props.showPersons) {
        buttonClass = styles.Red;
    }

    if (props.personsLength <= 2) {
        className.push(styles.red);
    }
    if (props.personsLength <= 1) {
        className.push(styles.bold);
    }

    return (
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>
            <p className={className.join(' ')}>Some random text</p>
            <button
                className={buttonClass}
                ref={toggleButtonRef}
                onClick={props.clicked}>
                Toggle Person
            </button>
            <button onClick={authContext.login}>
                Login
            </button>
        </div>
    );
}

export default React.memo(Cockpit);