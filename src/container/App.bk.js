import React, { useState } from 'react';
import './App.css';
import Person from '../Person/Person'; //Custom element

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Kush', age: 26 },
      { name: 'Nikhilesh', age: 28 },
    ],
    otherState: 'This is other state'
  });

  const [otherState] = useState('Just another string');

  console.log(personsState, otherState);
  const switchNameHandler = () => {
    console.log('Button clicked!!');
    setPersonsState({
      persons: [
        { name: 'K', age: 2 },
        { name: 'n', age: 4 }
      ],
      oldPersons: personsState.persons
    });
  }

  return (
    <div className='App'>
      <h1>Hi, I'm React App</h1>
      <button onClick={switchNameHandler}>Click here!</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}>
        My Hobbies: Reading
      </Person>
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}>
        My Hobbies: Bakar
      </Person>
    </div>
  );
}

export default App;