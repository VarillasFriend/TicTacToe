import './Game.css';
import React, { useState } from 'react';
import Board from './Board';
import PlayerForm from './PlayerForm'

function Game()  {
  const [firstPlayer, setFirstPlayer] = useState({ name: '', marker: 'x' }),
        [secondPlayer, setSecondPlayer] = useState({ name: '', marker: 'o' });

  const setFirstPlayerName = (name) => {
    setFirstPlayer({ name: name, marker: 'x' });
  }

  const setSecondPlayerName = (name) => {
    setSecondPlayer({ name: name, marker: 'o' });
  }

  if (firstPlayer.name === '') {
    return <PlayerForm player={firstPlayer} setName={setFirstPlayerName} />;
  } else if (secondPlayer.name === '') {
    return <PlayerForm player={secondPlayer} setName={setSecondPlayerName} />;
  }

  return (
    <Board firstPlayer={firstPlayer} secondPlayer={secondPlayer} />
  );
}

export default Game;

