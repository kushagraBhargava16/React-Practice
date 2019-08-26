import React, { Component } from 'react';

import styles from './App.module.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'


class App extends Component {

  state = {
    persons: [
      { id: 'iaaiaia1', name: 'Kush', age: 26 },
      { id: 'iaaiaia2', name: 'Nikhilesh', age: 28 },
      { id: 'iaaiaia3', name: 'Shashank', age: 26 },
    ],
    showPersons: false
  };

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id);
    const persons = [...this.state.persons];
    persons[personIndex].name = event.target.value;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons });
  }


  render() {

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler} />
      );
    }

    return (
      <div className={styles.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
