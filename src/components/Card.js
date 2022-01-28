import './Card.css'
import React, { useEffect } from 'react';

function Card(props) {
  const changeMarker = (e) => {
    props.updateBoard(props.index);
  };

  useEffect(() => {
    if (props.board[props.index] !== '') {
      document.getElementById(props.index).classList.add('clicked');
      return;
    }

    document.getElementById(props.index).classList.remove('clicked', 'win-card');
  })

  if (props.board[props.index] === 'x') {
    return (
      <div className='card' id={props.index}>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="44" height="44" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <line className="line1" x1="18" y1="6" x2="6" y2="18" />
          <line className="line2" x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </div>
    );
  } else if (props.board[props.index] === 'o') {
    return (
      <div className='card' id={props.index}>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="44" height="44" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <circle className="circle" cx="12" cy="12" r="7" />
        </svg>
      </div>
    );
  }

  return <div className='card' id={props.index} onClick={changeMarker}></div>;
}

export default Card;

