import React, { useState } from 'react';
import './App.css';
import Human from './Human/Human'

const app = props => {
  const [ humanState, setHumanState ] = useState({
    humans: [
      { name: "Faye", age: 27 },
      { name: "Giovanni", age: 29 },
      { name: "Rosie", age: 6 },
    ],
  });

  const changeHobbyHandler = () => {
    // console.log('was clicked');
    // this.state.persons[0].name="Faye Sipiano"
    humanState({
      humans: [
        { name: "Faye Sipiano", age: 27 },
        { name: "Giovanni", age: 29 },
        { name: "Rosie", age: 6 },
      ]
    });
  }

    return (
      <div className="App">
        <h1>Hi, this is my React app</h1>
        <button onClick={changeHobbyHandler}>Switch hobby</button>
        <Human name={humanState.humans[0].name} age={humanState.humans[0].age}>
          My hobbies: Horse riding
        </Human>
        <Human
          name={humanState.humans[1].name}
          age={humanState.humans[1].age}
        ></Human>
        <Human
          name={humanState.humans[2].name}
          age={humanState.humans[2].age}
        ></Human>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))

}


export default app;



// state = {
    // humans: [
    //   { name: 'Faye', age: 27 },
    //   { name: 'Giovanni', age: 29 },
    //   { name: 'Rosie', age: 6 }
    // ]

//   }

  // changeHobbyHandler = () => {
  //   // console.log('was clicked');
  // // this.state.persons[0].name="Faye Sipiano"
  //   this.setState({
  //     humans: [
  //       { name: "Faye Sipiano", age: 27 },
  //       { name: "Giovanni", age: 29 },
  //       { name: "Rosie", age: 6 },
  //     ],
//     });
//   }
