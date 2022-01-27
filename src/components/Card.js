import './Card.css'
import React, { useState } from 'react';

function Card(props) {
  const [locked, setLocked] = useState(false);

  const changeMarker = () => {
    if (locked) {
      return;
    }

    setLocked(true);

    props.updateBoard(props.index);
  };

  return (
    <div className='card' onClick={changeMarker}>
      {props.board[props.index]}
    </div>
  );
}

export default Card;
