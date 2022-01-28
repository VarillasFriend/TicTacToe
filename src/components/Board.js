import Card from './Card'
import React, { useState } from 'react';
import './Board.css'

function Board(props) {
  const [marker, setMarker] = useState('x');
  const [board, setBoard] = useState(['', '', '',
                                      '', '', '',
                                      '', '', ''])

  const updateBoard = (index) => {
    let newMarker = marker === 'o' ? 'x' : 'o',
        newBoard  = board;
    newBoard[index] = marker;

    setMarker(newMarker);
    setBoard(newBoard);
    
    let winner = checkWinner();

    if (winner && winner[0]) {
      if (winner[1] === '') {
        alert('It\'s a tie') 
        reset();
        return;
      }

      winner = winner[1] === 'x' ? props.firstPlayer : props.secondPlayer
      props.incrementWins(winner);
        
      alert(`${winner.name} won!`)
      reset();
    }
  }

  const checkWinner = () => {
    for (let i = 0; i <= 6; i += 3) {
      if (board[i] === board[i + 1] && board[i] === board[i + 2] && board[i] !== '') {
        return [true, board[i]];
      }
    }

    for (let i = 0; i <= 2; i++) {
      if  (board[i] === board[i + 3] && board[i] === board[i + 6] && board[i] !== '') {
        return [true, board[i]];
      }
    }

    if ( (board[0] === board[4] && board[0] === board[8] && board[0] !== '') ||
         (board[2] === board[4] && board[2] === board[6] && board[2] !== '') ) {
      return [true, board[4]];
    }    
    
    if (!board.includes('')) {
      return [true, '']
    }
  }

  const reset = () => {
    setBoard(['', '', '',
              '', '', '',
              '', '', '']);
    setMarker('x');
  }

  return (
    <div className='board'>
      <Card index='0' board={board} updateBoard={updateBoard} />
      <Card index='1' board={board} updateBoard={updateBoard} />
      <Card index='2' board={board} updateBoard={updateBoard} />
   
      <Card index='3' board={board} updateBoard={updateBoard} />
      <Card index='4' board={board} updateBoard={updateBoard} />
      <Card index='5' board={board} updateBoard={updateBoard} />

      <Card index='6' board={board} updateBoard={updateBoard} />
      <Card index='7' board={board} updateBoard={updateBoard} />
      <Card index='8' board={board} updateBoard={updateBoard} />
    </div>
  );
}

export default Board;
