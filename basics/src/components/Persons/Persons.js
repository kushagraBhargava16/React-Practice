import React, { Component } from 'react';

import Person from './Person/Person'

class Persons extends Component {

    // This cant be used without an initial state
    // static getDerivedStateFromProps(props, state) {
    //     console.log("[Persons.js] getDerivedStateFromProps", state, props);
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("[Persons.js] shouldComponentUpdate");
    //     if (
    //         nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked
    //     ) {
    //         return true;
    //     }
    //     return false;
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[Persons.js] getSnapshotBeforeUpdate");
        return { message: 'Snapshot' }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("[Persons.js] componentDidUpdate", snapshot);
    }

    componentWillUnmount() {
        console.log("[Persons.js] componenetWillUnmount");
    }

    render() {
        console.log('[Persons.js] render');
        return this.props.persons.map((person, index) =>
            <Person
                name={person.name}
                age={person.age}
                key={person.id}
                click={() => this.props.clicked(index)}
                changed={(event) => this.props.changed(event, person.id)}
            />
        )
    }
}

export default Persons;