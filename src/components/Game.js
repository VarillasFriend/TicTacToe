import './Game.css';
import React, { useState } from 'react';
import Board from './Board';
import PlayerForm from './PlayerForm'

function Game()  {
  const [firstPlayer, setFirstPlayer] = useState({ name: '', marker: 'x', wins: 0 }),
        [secondPlayer, setSecondPlayer] = useState({ name: '', marker: 'o', wins: 0 }),
        [aiMode, setAiMode] = useState(false);

  const setFirstPlayerName = (name) => {
    setFirstPlayer({ name: name, marker: 'x', wins: 0 });
  }

  const setSecondPlayerName = (name) => {
    setSecondPlayer({ name: name, marker: 'o', wins: 0 });
  }

  const incrementWins = (player) => {
    if (player === firstPlayer) {
      setFirstPlayer({ name: firstPlayer.name, marker: 'x', wins: firstPlayer.wins + 1 })
      return;
    }

    setSecondPlayer({name: secondPlayer.name, marker: 'o', wins: secondPlayer.wins + 1})
  } 

  const reset = () => {
    setFirstPlayerName('');
    setSecondPlayerName('');
    setAiMode(false);

    Board.reset();
  }

  const setAiModeAndPlayer = () => {
    setAiMode(true);
    setSecondPlayerName('Ai');
  }
  
  if (firstPlayer.name === '') {
    return <PlayerForm player={firstPlayer} setName={setFirstPlayerName} />;
  } else if (secondPlayer.name === '') {
    return <PlayerForm player={secondPlayer} setName={setSecondPlayerName} setAiMode={setAiModeAndPlayer} />;
  }

  return (
    <div className='Game'>
      <button className='reset' onClick={reset}>
        Reset
      </button>
      <div className='scoreboard'>
        {firstPlayer.name + ': ' + firstPlayer.wins + ' | '} 
        {secondPlayer.name + ': ' + secondPlayer.wins}
      </div>

      <Board firstPlayer={firstPlayer} secondPlayer={secondPlayer} incrementWins={incrementWins} aiMode={aiMode} />
    </div>
  );
}

export default Game;

