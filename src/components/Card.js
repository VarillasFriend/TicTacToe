import './Card.css'
import React, { useEffect } from 'react';

function Card(props) {
  const changeMarker = (e) => {
    animateClick(e);
    props.updateBoard(props.index);
  };

  const animateClick = (e) => {
    const bounds = e.target.getBoundingClientRect(),
          left = [bounds.x,
                  bounds.y + bounds.height / 2],
          top = [bounds.x + bounds.width / 2,
                  bounds.y],
          right = [bounds.x + bounds.width,
                   bounds.y + bounds.height / 2],
          bottom = [bounds.x + bounds.width / 2,
                    bounds.y + bounds.height],
          center = [bounds.x + bounds.width / 2,
                    bounds.y + bounds.height / 2],
          array = [left, top, right, bottom, center],
          clickCoords = [e.clientX, e.clientY],
          distances = array.map(coords => calcDistance(coords, clickCoords)),
          side = distances.indexOf(Math.min(...distances));
    
    switch (side) {
      case 0:
        e.target.classList.add('left');
        break;
      case 1:
        e.target.classList.add('top');
        break;
      case 2:
        e.target.classList.add('right');
        break;
      case 3:
        e.target.classList.add('bottom');
        break;
      default:
        e.target.classList.add('center');
    }
  }

  const calcDistance = (coords, coords2) => {
    return ( (coords[0] - coords2[0]) ** 2 + 
             (coords[1] - coords2[1]) ** 2 ) ** 0.5;
  }

  useEffect(() => {
    const card = document.getElementById(props.index);
      
    if (props.board[props.index] !== '') {
      card.classList.add('clicked');
      return;
    }

    card.classList.remove('clicked', 'win-card');
    card.classList.remove('left', 'right', 'top', 'bottom', 'center');
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

