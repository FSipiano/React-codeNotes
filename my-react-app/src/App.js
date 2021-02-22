import React, { Component } from 'react';
import './App.css';
import Human from './Human/Human'

class App extends Component {
  state = {
    humans: [
      { name: 'Faye', age: 27 },
      { name: 'Giovanni', age: 29 },
      { name: 'Rosie', age: 6 }
    ]

  }

  changeHobbyHandler = () => {
    // console.log('was clicked');
  // this.state.persons[0].name="Faye Sipiano"
    this.setState({
      humans: [
        { name: "Faye Sipiano", age: 27 },
        { name: "Giovanni", age: 29 },
        { name: "Rosie", age: 6 },
      ],
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, this is my React app</h1>
        <button onClick={this.changeHobbyHandler}>Switch hobby</button>
        <Human name={this.state.humans[0].name} age={this.state.humans[0].age}>
          My hobbies: Horse riding
        </Human>
        <Human
          name={this.state.humans[1].name}
          age={this.state.humans[1].age}
        ></Human>
        <Human
          name={this.state.humans[2].name}
          age={this.state.humans[2].age}
        ></Human>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
