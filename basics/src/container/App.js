import React, { Component } from 'react';

import styles from './App.module.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import altWithClass from '../hoc/altWithClass'
import Aux from '../hoc/Auxillary'
import AuthContext from '../context/auth-context'


class App extends Component {

  constructor(props) {
    super(props);
    console.log("[App.js] contructor called");
  }

  state = {
    persons: [
      { id: 'iaaiaia1', name: 'Kush', age: 26 },
      { id: 'iaaiaia2', name: 'Nikhilesh', age: 28 },
      { id: 'iaaiaia3', name: 'Shashank', age: 26 },
    ],
    showPersons: false,
    showCockpit: true,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps');
    return state
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }


  loginHandler = () => {
    this.setState({ authenticated: true });
  }

  togglePersonHandler = () => {
    //Right way of setting state while the state depends on the previous state
    this.setState((prevState, props) => {
      return {
        showPersons: !prevState.showPersons
      }
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
    console.log('[App.js] render');
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
      <Aux >
        <button onClick={() => {
          this.setState(
            (prevState, props) => { return { showCockpit: !prevState.showCockpit } }
          )
        }}>Toggle Cockpit</button>
        <AuthContext.Provider
          value={{ authenticated: this.state.authenticated, login: this.loginHandler }}
        >
          {this.state.showCockpit
            ? <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonHandler} />
            : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default altWithClass(App, styles.App);
