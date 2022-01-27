import './App.css';
import React, { Component } from 'react';
import Board from './components/Board';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Board />
      </div>
    );
  }
}

export default App;

