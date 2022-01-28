import Ai from './Ai'
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

  const updateBoard = (index, currentMarker) => {
    let newBoard = board;
    newBoard[index] = currentMarker;

    setBoard(newBoard);
  }

  const makeMove = (index) => {
    updateBoard(index, props.aiMode ? 'x' : marker);
    setMarker(marker === 'o' ? 'x' : 'o');
    
    if (props.aiMode) {
      aiMove();
    }
    
    let winner = Ai.checkGameOver(board);

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

      return;
    }
  }

  const aiMove = () => {
    updateBoard(Ai.findBestMove(board, Ai.checkGameOver), 'o');
    setMarker(marker === 'o' ? 'x' : 'o');
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
      <Card index='0' board={board} makeMove={makeMove} />
      <Card index='1' board={board} makeMove={makeMove} />
      <Card index='2' board={board} makeMove={makeMove} />
   
      <Card index='3' board={board} makeMove={makeMove} />
      <Card index='4' board={board} makeMove={makeMove} />
      <Card index='5' board={board} makeMove={makeMove} />

      <Card index='6' board={board} makeMove={makeMove} />
      <Card index='7' board={board} makeMove={makeMove} />
      <Card index='8' board={board} makeMove={makeMove} />
    
      {alert ? alertHtml : ''}
    </div>
  );
}

export default Board;
