import React, { useState } from 'react';
import './App.css';
import Human from './Human/Human'

const app = props => {
  const [humanState, setHumanState] = useState({
    humans: [
      { name: "Faye", age: 27 },
      { name: "Giovanni", age: 29 },
      { name: "Rosie", age: 6 },
    ],
  });
}

  const changeNameHandler = () => {
    // console.log('was clicked');
    // this.state.persons[0].name="Faye Sipiano"
    this.setState({
      humans: [
        { name: "Faye Sipiano", age: 27 },
        { name: "Giovanni", age: 29 },
        { name: "Rosie", age: 6 },
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      humans: [
        { name: event.target.value, age: 27 },
        { name: "Giovanni", age: 29 },
        { name: "Rosie", age: 6 },
      ],
    });
  }

  render () {

    return (
      <div className="App">
        <h1>Hi, this is my React app</h1>
        <button onClick={changeNameHandler}>Change name</button>
        <Human name={humanState.humans[0].name}
          age={humanState.humans[0].age}>
        </Human>
        <Human
          name={this.state.humans[1].name}
          age={humanState.humans[1].age}
          click={this.changeNameHandler}
          changed ={this.nameChangeHandler}
        ></Human>
        <Human
          name={this.state.humans[2].name}
          age={this.state.humans[2].age}
        ></Human>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))

};




export default app;




