import Card from './Card'
import Alert from './Alert'
import React, { useState } from 'react';
import './Board.css'

function Board(props) {
  const [marker, setMarker] = useState('x'),
        [board, setBoard] = useState(['', '', '',
                                      '', '', '',
                                      '', '', '']),
        [alert, setAlert] = useState(false),
        [alertHtml, setAlertHtml] = useState(<div> </div>);

  const updateBoard = (index) => {
    let newMarker = marker === 'o' ? 'x' : 'o',
        newBoard  = board;
    newBoard[index] = marker;

    setMarker(newMarker);
    setBoard(newBoard);
    
    let winner = checkWinner();

    if (winner && winner[0]) {
      if (winner[1] === '') {
        setTimeout(() => {
          tieAlert();
          reset()
        }, 500);
        return;
      }

      animateWin(winner[2]);
      
      winner = winner[1] === 'x' ? props.firstPlayer : props.secondPlayer
      props.incrementWins(winner);
        
      setTimeout(() => {
        winAlert(winner.name);
        reset()
      }, 600);
    }
  }

  const checkWinner = () => {
    for (let i = 0; i <= 6; i += 3) {
      if (board[i] === board[i + 1] && board[i] === board[i + 2] && board[i] !== '') {
        return [true, board[i], [i, i + 1, i + 2]];
      }
    }

    for (let i = 0; i <= 2; i++) {
      if  (board[i] === board[i + 3] && board[i] === board[i + 6] && board[i] !== '') {
        return [true, board[i], [i, i + 3, i + 6]];
      }
    }

    if (board[0] === board[4] && board[0] === board[8] && board[0] !== '') {
      return [true, board[4], [0, 4, 8]];
    }    
    
    if (board[2] === board[4] && board[2] === board[6] && board[2] !== '') {
      return [true, board[4], [2, 4, 6]];
    }    
    
    if (!board.includes('')) {
      return [true, '']
    }
  }

  const animateWin = (array) => {
    array = array.map(index => document.getElementById(index));

    array.forEach((element) => {
      element.classList.remove('left', 'top', 'right', 'bottom', 'center');
      element.classList.add('win-card');
    })
  }

  const winAlert = (name) => {
    setAlert(true);
    setAlertHtml(
      <Alert alert={name + ' won!'} closeAlert={closeAlert} />
    );
  }
  
  const tieAlert = (name) => {
    setAlert(true);
    setAlertHtml(
      <Alert alert="It's a tie!" closeAlert={closeAlert} />
    );
  }

  const closeAlert = () => {
    setAlert(false);
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
    
      {alert ? alertHtml : ''}
    </div>
  );
}

export default Board;
