import React, { Component } from 'react';
import Card from './Card'
import './Board.css'

class Board extends Component {
  constructor() {
    super();

    this.state = {
      marker: 'x',
      board: ['', '', '',
              '', '', '',
              '', '', '']
    }

    this.updateBoard = this.updateBoard.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
  }

  updateBoard(index) {
    let newMarker = this.state.marker === 'o' ? 'x' : 'o',
        newBoard  = this.state.board;
    newBoard[index] = this.state.marker;

    this.setState({
      marker: newMarker,
      board: newBoard
    }) 
    this.checkWinner();
  }

  checkWinner() {
    const board = this.state.board;
    for (let i = 0; i <= 6; i += 3) {
      if (board[i] === board[i + 1] && board[i] === board[i + 2] && board[i] !== '') {
        return true;
      }
    }

    for (let i = 0; i <= 2; i++) {
      if  (board[i] === board[i + 3] && board[i] === board[i + 6] && board[i] !== '') {
        return true;
      }
    }

    if ( (board[0] === board[4] && board[0] === board[8] && board[0] !== '') ||
         (board[2] === board[4] && board[2] === board[6] && board[2] !== '') ) {
      return true;
    }    
  }

  render() {
    return (
      <div className='board'>
        <Card index='0' board={this.state.board} updateBoard={this.updateBoard} />
        <Card index='1' board={this.state.board} updateBoard={this.updateBoard} />
        <Card index='2' board={this.state.board} updateBoard={this.updateBoard} />
     
        <Card index='3' board={this.state.board} updateBoard={this.updateBoard} />
        <Card index='4' board={this.state.board} updateBoard={this.updateBoard} />
        <Card index='5' board={this.state.board} updateBoard={this.updateBoard} />

        <Card index='6' board={this.state.board} updateBoard={this.updateBoard} />
        <Card index='7' board={this.state.board} updateBoard={this.updateBoard} />
        <Card index='8' board={this.state.board} updateBoard={this.updateBoard} />
      </div>
    );
  }
}

export default Board;
