import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'

class App extends Component {
  state = {

  }
  render() {
    return (
      <div className="App">
        <UserInput />
        <UserOutput name="Username" />
        <UserOutput name="Username" />
        <UserOutput name="Username" />
      </div>
    );
  }
}

export default App;
