import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person'; //Custom element

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
    // console.log(event.target);
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
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      color: 'white',
      ':hover': {
        backgroundColor: 'lightgreen'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) =>
            <Person
              name={person.name}
              age={person.age}
              key={person.id}
              click={this.deletePersonHandler.bind(this, index)}
              changed={(event) => this.nameChangeHandler(event, person.id)}
            ></Person>
          )}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'indianred'
      }
    }

    const className = [];
    if (this.state.persons.length <= 2) {
      className.push('red');
    }
    if (this.state.persons.length <= 1) {
      className.push('bold');
    }

    return (
      <StyleRoot>
        <div className='App'>
          <h1>Hi, I'm React App</h1>
          <p className={className.join(' ')}>Some random text</p>
          <button
            style={style}
            onClick={this.togglePersonHandler}
          >Toggle Person</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
